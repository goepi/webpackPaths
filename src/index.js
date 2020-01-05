const path = require("path");
const fs = require("fs");
const http = require("http");

const getTemplate = (templateName, callback) => {
  if (templateName.length > 0) {
    const templatesDir = path.join(__dirname, "/templates/");
    console.log(templatesDir, __dirname, `${templatesDir}/${templateName}.js`);
    fs.readFile(`${templatesDir}/${templateName}.html`, "utf8", (err, str) => {
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

getTemplate("index", (err, str) => console.log(err, str));

const server = http.createServer((req, res) => {
  getTemplate("index", (err, str) => {
    res.writeHead(200);

    res.end(str);
  });
});

server.listen(3000);
