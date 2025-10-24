// server.js
const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // success status
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello REST API");
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
