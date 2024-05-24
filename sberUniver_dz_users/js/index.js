import * as func from './func.js';

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then((data) => {
    data.forEach((el) => {
      func.createUserCard(el);
    });
  });