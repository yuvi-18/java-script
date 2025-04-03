# Json

JSON = (JavaScript Object Notation) data-interchange format 
              Used for exchanging data between a server and a web application
              JSON files {key:value} OR [value1, value2, value3]

JSON.stringify() = converts a JS object to a JSON string.
JSON.parse() = converts a JSON string to a JS object


# .json 

The .json() method is a function available on the Response object returned by the fetch() API, it also returns a promise.

Reads the Response Body: When you call .json(), it reads the text from the response body asynchronously.

Parses the Text: It converts the raw text into a JavaScript object using JSON.parse() under the hood.

Returns a Promise: Because reading and parsing can take time (especially for large responses), .json() returns a promise that resolves to the resulting JavaScript object once the parsing is complete.