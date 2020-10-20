const http = require("http");

const port = process.env.PORT || 5000;
const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`Server running on ${port}`)
})

function handleRequest(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.write("<body><h1> Hello world! </h1></body>");
  return res.end();
}