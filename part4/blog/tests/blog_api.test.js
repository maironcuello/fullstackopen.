const mongoose = require('mongoose')
const request = require('supertest')
const app = require('../app')
const server = require('../index')
const Blog = require('../models/blog.model')
// const { before } = require('lodash')
const getAllBlogs = require('../utils/list_helper');


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

beforeEach(async () => {
  await Blog.deleteMany({})
  
  // Sequencial
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
  const blogtoStart = await getAllBlogs()
  const blogToDelete = blogtoStart[0]
  console.log(blogToDelete);
  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .expect(204)

})

afterAll(() => {
  mongoose.connection.close()
  server.close()
});