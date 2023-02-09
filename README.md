# Web server for a application of a book online store (course project)

A web server for a single-page web application of an online bookstore that
allows you to filter the selection of books with automatic calculation of the
order amount.

## Description

The project was created on "Node.js" using the server on the "Express" framework
connected to the "MongoDB" database for a front end project on the "React"
framework.

The front end project is located
[here](https://github.com/Eduard-Konovka/feb101-course-task/).

## Application launch instructions

This app is built for the front end server at
[https://feb101-course-task-eduard-konovka.netlify.app/](https://feb101-course-task-eduard-konovka.netlify.app/)

- The `/api/books` endpoint is used to get the list of books
- The `/api/orders` endpoint is used to send orders

### Data Information

In the database, data about users, books and orders are stored in an object-like
form, and formally look like an object.

- The book element looks like this:

```js
{
  _id: "62fd6842378ee79a0e0493bf",
  id: 1,
  author: "FistName LastName",
  price: 0.01,
  image: "http://site.com/path/image.jpg"
  title: "Book title",
  shortDescription: "Short book description",
  description: "Full book description",
}
```

- The order element looks like this:

```js
{
  _id: "63e2c3bfcdd9f0008c1dafbb",
  user: { name: "aaa", email: "bbb@bbb.com", phone: "1234567", address: "ccc" },
  cart: [
    {
      _id: "63b8136ad53d7d45a37cfe0b",
      id: 7,
      author: 'Saleem Siddiqui',
      price: 36.99,
      image:
        'https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@learning_test_driven_development.jpg',
      title: 'Learning Test-Driven Development',
      shortDescription:
        'Your code is a testament to your skills as a developer. No matter what language you use, code should be clean, elegant, and uncluttered.',
      description:
        "Your code is a testament to your skills as a developer. No matter what language you use, code should be clean, elegant, and uncluttered. By using test-driven development (TDD), you'll write code that's easy to understand, retains its elegance, and works for months, even years, to come. With this indispensable guide, you'll learn how to use TDD with three different languages: Go, JavaScript, and Python. Author Saleem Siddiqui shows you how to tackle domain complexity using a unit test-driven approach. TDD partitions requirements into small, implementable features, enabling you to solve problems irrespective of the languages and frameworks you use. With Learning Test-Driven Development at your side, you'll learn how to incorporate TDD into your regular coding practice.",
      count: 3,
    },
    {
      _id: "63b8136ad53d7d45a37cfe0b",
      id: 3,
      author: 'Adam D. Scott',
      price: 8.99,
      image:
        'https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_everywhere.jpg',
      title: 'JavaScript Everywhere',
      shortDescription:
        'JavaScript is the little scripting language that could. Once used chiefly to add interactivity to web browser windows, JavaScript is now a primary building block of powerful and robust applications.',
      description:
        'JavaScript is the little scripting language that could. Once used chiefly to add interactivity to web browser windows, JavaScript is now a primary building block of powerful and robust applications. In this practical book, new and experienced JavaScript developers will learn how to use this language to create APIs as well as web, mobile, and desktop applications. Author and engineering leader Adam D. Scott covers technologies such as Node.js, GraphQL, React, React Native, and Electron. Ideal for developers who want to build full stack applications and ambitious web development beginners looking to bootstrap a startup, this book shows you how to create a single CRUD-style application that will work across several platforms.',
      count: 1,
    }
  ],
  totalCost: 119.96,
  createdAt: "2023-02-07T21:33:51.867+00:00",
  updatedAt:"2023-02-07T21:33:51.867+00:00"
}
```

- - User information can be limited to only the name:

```js
{
  // ...
  user: { name: "aaa" },
  // ...
}
```
