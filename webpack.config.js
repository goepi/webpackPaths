var path = require("path");
module.exports = {
  target: "node",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  node: {
    __dirname: true
  },
  context: path.resolve(__dirname)
};
