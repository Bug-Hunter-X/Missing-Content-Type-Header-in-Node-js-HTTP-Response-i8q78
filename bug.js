const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting the Content-Type header, the response may be interpreted incorrectly.
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});