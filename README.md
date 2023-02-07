# Web server for a application of a basic online store

A web server for a single-page web application of a simple online store that
allows you to select the necessary product from the proposed range in the right
quantity with automatic calculation of the order amount.

## Description

The project was created on "Node.js" using the server on the "Express" framework
connected to the "MongoDB" database for a front end project on the "React"
framework.

The front end project is located
[here](https://github.com/Eduard-Konovka/feb101-course-task/).

## Application launch instructions

This app is built for the front end server at
[https://feb101-course-task-eduard-konovka.netlify.app/](https://feb101-course-task-eduard-konovka.netlify.app/)

- The `/api/shops` endpoint is used to get the list of stores
- The `/api/books` endpoint is used to get the list of stores
- The `/api/orders` endpoint is used to send orders

### Data Information

In the database, data about stores, products and orders are stored in an
object-like form, and formally look like an object.

- The shop element looks like this:

```js
{
  _id: "62f93e03376ee77a0e04939d",
  title: "Shop name",
  shopId: "1"
}
```

- The book element looks like this:

```js
{
  _id: "62fd6842378ee79a0e0493bf",
  code: 1,
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
  _id: "62fffda1ad5362d4afddc83d",
  user: { name: "aaa", email: "bbb@bbb.com", phone: "1234567", address: "ccc" },
  cart: [
    {
      _id: "62fd6842378ee77a0e0493bf",
      imgUrl: "berries.jpg",
      title: "Berries",
      descr: "Product description 1.1",
      category: "1",
      price: 10,
      available: 3,
      shopId: "1",
      qwantity: 1,
      cost: 10
    },
    {
      _id: "62fd6842378ee77a0e0493c0",
      imgUrl: "coffee.jpg",
      title: "Coffee",
      descr: "Product description 1.2",
      category: "5",
      price: 20,
      available: 5,
      shopId: "1",
      qwantity: 3,
      cost: 60
    }
  ],
  totalPrice: 70,
  createdAt: "2022-08-19T21:16:17.294+00:00",
  updatedAt:"2022-08-19T21:16:17.294+00:00"
}
```
