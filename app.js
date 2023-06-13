const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>My Home Page</title></head>");
    res.write("<body><h1>Welcome Home!</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>My Home Page</title></head>");
    res.write("<body><h1>Welcome to about us page</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>My Home Page</title></head>");
    res.write("<body><h1>Welcome to node js project!</h1></body>");
    res.write("</html>");
    res.end();
  }
  //   res.setHeader("Content-Type", "text/html");
});
server.listen(3000);
