const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");

  let path = "./pages/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(8000, "localhost", () => {
  console.log("Listening f0r request on port 8000");
});
