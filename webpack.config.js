const path = require('path');

module.exports = {
  entry: './react/app.js',
  output: {
    path: path.resolve(__dirname, 'static/assets/scripts'),
    filename: 'react-components.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};