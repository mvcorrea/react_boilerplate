const path = require("path");
const HTMLplugin = require("html-webpack-plugin");

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader"
    }
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader"]
  },
  {
    test: /\.html$/,
    loader: "html-loader"
  }
];

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  module: { rules },
  devServer: {
    host: "0.0.0.0",
    port: 80,
    disableHostCheck: true
  },
  plugins: [
    new HTMLplugin({
      template: "./public/index.html"
    })
  ]
};
