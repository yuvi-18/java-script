# fetch
The fetch() method in JavaScript is a modern, promise-based API that allows you to perform asynchronous HTTP requests easily,it returns a promise.Simplifies asynchronous data fetching in JavaScript and
used for interacting with APIs to retrieve and send data asynchronously over the web.

```js
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Returns another promise
  })
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
```