const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    const message = fs.readFileSync("./message.txt", (err, data) => {
      const msg = [];
      msg.push(data);
      const parsedmsg = Buffer.concat(msg).toString();
      console.log(parsedmsg);
      return parsedmsg;
    });
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      `<body><p>${message}</p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      // console.log(body);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      // console.log(message);
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};

// exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   sometext: "Some hard coded text",
// };

exports.handler = requestHandler;
exports.someText = "Some hard coded text";