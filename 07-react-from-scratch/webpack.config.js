const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: 'only',
    liveReload: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello World",
      template: path.resolve(__dirname, "template.html"),
    }),
  ],
};
