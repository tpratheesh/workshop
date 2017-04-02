var webpack = require("webpack");
var path = require("path");
 
var DEV = path.resolve(__dirname, "src");
var OUTPUT = path.resolve(__dirname, "static");
 
var config = {
  entry: DEV + "/App.jsx",
  output: {
    path: OUTPUT,
    filename: "myCode.js"
  },
  watch: true,
  module: {
    loaders: [{
        include: DEV,
        loader: "babel",
         query: {compact: false}
    },
    { test: /\.css$/, loader: "style-loader!css-loader" },
    {
      test: /\.(png|jpg|gif|ttf)$/,
      loader: "file-loader?name=img/[name].[ext]"
    }],
   
  }
};
 
module.exports = config;