const path = require("path");
const HTMLplugin = require("html-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "build/");
const SOURCE_DIR = path.resolve(__dirname, "src/");

const rules = [
  {
    test: /\.(js|jsx)$/,
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
  entry: SOURCE_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: { rules },
  devServer: {
    host: "0.0.0.0",
    port: 5000,
    disableHostCheck: true
  },
  plugins: [
    new HTMLplugin({
      template: "./public/index.html"
    })
  ]
};
