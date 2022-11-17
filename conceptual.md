### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

-Promises

-Async & Await 


- What is a Promise?

-The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

- What are the differences between an async function and a regular function?

-An asyncronous function is a function that will execute its code unobstructed while a regular function may need to wait for certain data to be passed or other code to execute beforehand.

- What is the difference between Node.js and Express.js?

-Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser, while Express is a node.js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.

- What is the error-first callback pattern?

-The error-first pattern consists of executing a function when the asynchronous operation ends (such as an incoming AJAX response) which takes as first argument an error, if one occurred, and the result of the request as extra arguments.

- What is middleware?

-Middleware is code that will execute between the application's request-response cycle.

- What does the `next` function do?

-The next() function in Express js is helpful for passing control from one middleware function to another when creating custom middleware routines.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

-It would be beneficial to use Promise.all() for retrieving the asycnronous code.
-the constants may be more aptly named nameElie, nameJoel, etc.
-It might be better to use axios to retrieve the data

```js****
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
