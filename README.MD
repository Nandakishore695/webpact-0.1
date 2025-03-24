# Webpack 2 Basics Tutorial

- https://webpack.js.org/
- Before Webpack Grunt used.
- Webpack release in 2012 
- Written in javascript

** Webpack use **
- Make Build
- JS & CSS Minify
-	Entry file

**Introduction: -**
-	Webpack Basic and Build
-	Webpack Config and Build
-	React with webpack

**What is webpack?**
-	Webpack is a module bundler for JavaScript applications. It takes your project's JavaScript files, along with their dependencies (like CSS, images, and other assets), and bundles them into one or more optimized output files, typically for use in a browser.


**Requirements: -**
-	Node.js install 
-	npm init -y
-	npm install webpack webpack-cli --save-dev // only in development not in production 
-	npm install webpack-dev-server --save-dev
-	npm install css-loader style-loader –save-dev

**Create Folder and files: -**
**Distribution / dist folder**
-	main.js
-	Index.html

**src**
-	Index.js
-	Other.js
webpack.config.js


**Package.json File: -**
{
  "name": "yt-webpack2-basics",
  "version": "1.0.0",
  "description": "This repository holds the source code of my Webpack 2 Basics Series on YouTube. Make sure to watch the Videos on YouTube to understand how to use that code.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.98.0",
    "webpack-cli": "^6.0.1"
  }
}

Webpack.config.js File for javascript bundling: -
const path = require('path');
module.exports = {
  mode: 'development', // or 'production'
  entry: './src/js/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};






Webpack Four Core Concepts: -
1.	Entry Point
2.	Output 
3.	Module loaded
4.	Plugins 

Loaders allow us to transform our files.
Webpack.config.js File for css bundling: -
module: {
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
