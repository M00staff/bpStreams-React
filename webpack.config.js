const path = require('path');

module. exports = {
  entry: './entry.js',
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
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
