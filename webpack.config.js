const path = require('path');
const webpack = require('webpack');

module.exports = {
  //javascript file to start bundling
  entry: './src/js/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //css file to start bundling
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  mode: 'development', // or 'production'
  //on server localhost:3400
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3400
  },
};