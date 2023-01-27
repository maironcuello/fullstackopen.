const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
const server = require('../index');
const Blog = require('../models/blog.model');
const User = require('../models/user.model');
const { AllBlogs, AllUsers } = require('../utils/helper');
const { encrypPassword } = require('../utils/encrypt.password');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');



const api = request(app)

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
let token;
beforeEach(async () => {
  /**
   * Dellete all blogs in database
   */
  await Blog.deleteMany({})
  await User.deleteMany({})

  /**
   * Created users for test in User and blog database
   */
  // for (const user of initialUsers) {
  //   const newUserObject = new User(user)
  //   await newUserObject.save()
  // }
  const password = await encrypPassword('123456');
  const user = new User({
    username: 'mairon',
    name: 'mairon cuello',
    password,
  })
  const savedUser = await user.save()

  const userForToken = {
    username: savedUser.username,
    id: savedUser._id,
  }
  token = jwt.sign(userForToken, config.GENERATED_TOKEN)

  for (const blog of initialBlogs) {
    const newBlogObject = new Blog(blog)
    newBlogObject.user = savedUser._id
    await newBlogObject.save()
  }
})


describe('Get API/BLOGS', () => {

  test('Content-Type is Json', async () => {
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

  test('The title of the first blog is about', async () => {
    const response = await api.get('/api/blogs')
    const titles = response.body.map((blog) => blog.title)
    expect(titles).toContain("La mejor comida del mundo")
  })
});

describe('Get API/USERS', () => {

  test('Content-Type is Json', async () => {
    await api
      .get('/api/users')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
});


describe('New User API/POST', () => {

  test('New User and encrypted password', async () => {
    const newUser = {
      username: "breiner",
      name: "Breiner Cuello",
      password: "jkhkhkhkhKHUIKYIUHYK656"
    }
    const hash = await encrypPassword(newUser.password)
    newUser.password = hash
    // const AllUsersInitial = await AllUsers()

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)

    // const AllUsersFinich = await AllUsers()
    // expect(AllUsersFinich).toHaveLength(AllUsersInitial.length)
  })
})



describe('DELETE API/BLOGS', () => {
  test('Delete a blog', async () => {
    const AllblogtoInitial = await AllBlogs()
    const blogToDelete = AllblogtoInitial[0]
    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .set('token', token)
      .expect(200)

    const AllblogsFinich = await AllBlogs()
    expect(AllblogsFinich).toHaveLength(initialBlogs.length -1)
  })
});

// test('Route delete /api/users', async () => {
//     const usertoStart = await getAllUser()
//     const userToDelete = usertoStart[0]
//     console.log(userToDelete);
//     await api
//         .delete(`/api/blogs/${userToDelete.id}`)
//         .expect(204)
// })

describe('POST API/BLOGS', () => {

  test('if token is not provided blog is not added', async () => {
    const newBlog = {
      title: "Blog about React JS",
      author: "Mairon Cuello Martinez",
      url: "www.maironcuello.com",
      likes: 200,
    }
    const AllblogsInitial = await AllBlogs()
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(401)

    const AllblogsFinich = await AllBlogs()
    expect(AllblogsFinich).toHaveLength(AllblogsInitial.length)
  })

  test('Create a new Blog with token', async () => {
    const newBlog = {
      title: "Blog about React and Node JS",
      author: "Mairon Cuello Martinez",
      url: "www.maironcuello.com",
      likes: 200,
    }

    await api
      .post('/api/blogs')
      .set('token', token)
      .send(newBlog)
      .expect(200)
  })
})


afterAll(() => {
  mongoose.connection.close()
  server.close()
});