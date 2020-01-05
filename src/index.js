const path = require("path");
const fs = require("fs");
const http = require("http");

const getTemplate = (templateName, callback) => {
  if (templateName.length > 0) {
    const templatesDir = path.join(__dirname, "/templates/");

    const filePath = `${templatesDir}${templateName}.html`;

    console.log(templatesDir, __dirname, filePath);

    fs.readFile(filePath, "utf8", (err, str) => {
      if (!err && str && str.length > 0) {
        callback(false, str);
      } else {
        callback(true);
      }
    });
  } else {
    callback(true);
  }
};

const server = http.createServer((req, res) => {
  getTemplate("index", (err, str) => {
    res.writeHead(200);

    res.end(str);
  });
});

server.listen(3000);
