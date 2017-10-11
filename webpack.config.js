const path = require('path');

module. exports = {
  entry: ['babel-polyfill', './entry.js'],
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 7777
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'es2017']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
