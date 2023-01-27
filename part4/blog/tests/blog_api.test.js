const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
const server = require('../index');
const Blog = require('../models/blog.model');
const User = require('../models/user.model');
const { AllBlogs } = require('../utils/helper');
const { encrypPassword } = require('../utils/encrypt.password');


const api = request(app)

const initialUsers = [
  {
    username: "mairon",
    name: "mairon cuello",
    password: "huioyuiuyiuYIUYIUYi"
  },
  {
    username: "Javier",
    name: "Mairon Javier",
    password: "huioyuiuyiuYIUYIUYi"
  },
  {
    username: "dulce",
    name: "Dulce Mariana Cuello",
    password: "huioyuiuyiuYIUYIUYi"
  }
]

const initialBlogs = [
  {
    title: "La mejor comida del mundo",
    author: "mairon cuello",
    url: "www.coco.com",
    likes: 20
  },
  {
    title: "La mejor de dos",
    author: "mairon cuello",
    url: "www.coco.com",
    likes: 20,
  },
  {
    title: "La mejor de tres",
    author: "Breiner cuello",
    url: "www.coczxzxzo.com",
    likes: 50,
  }
]

beforeEach(async () => {
  /**
   * Dellete all blogs in database
   */
  await Blog.deleteMany({})
  await User.deleteMany({})

  /**
   * Created users for test in User and blog database
   */
  for (const user of initialUsers) {
    const newUserObject = new User(user)
    await newUserObject.save()
  }
  for (const blog of initialBlogs) {
    const newBlogObject = new Blog(blog)
    await newBlogObject.save()
  }
})

test('Route api/blogs', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('There are any note', async () => {
  const response = await api
    .get('/api/blogs')
  expect(response.body).toHaveLength(initialBlogs.length)
})

test('The title of the first blog is about meed', async () => {
  const response = await api.get('/api/blogs')
  const titles = response.body.map((blog) => blog.title)
  expect(titles).toContain("La mejor comida del mundo")
})

test('Create a new Blog', async () => {
  const newBlog = {
    title: "Blog about React JS",
    author: "Mairon Cuello MArtinez",
    url: "www.maironcuello.com",
    likes: 200,
  }
  await api.post('/api/blogs')
    .send(newBlog)
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Delete a blog', async () => {
  const blogtoStart = await AllBlogs()
  const blogToDelete = blogtoStart[0]
  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .expect(204)
})

/**
 * Test /api/users routes
 */
test('Route get /api/users', async () => {
  await api
    .get('/api/users')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Crate a new User route post /api/users', async () => {
  let newUser = {
    username: "breiner",
    name: "breiner cuello",
    password: "jkhkhkhkhKHUIKYIUHYK656"
  }
  const hash = encrypPassword(newUser.password)
  newUser.password = hash

  await api.post('/api/users')
    .send(newUser)
    .expect(200)
    .expect('Content-Type', /application\/json/)
  })

// test('Route delete /api/users', async () => {
//     const usertoStart = await getAllUser()
//     const userToDelete = usertoStart[0]
//     console.log(userToDelete);
//     await api
//         .delete(`/api/blogs/${userToDelete.id}`)
//         .expect(204)
// })



afterAll(() => {
  mongoose.connection.close()
  server.close()
});