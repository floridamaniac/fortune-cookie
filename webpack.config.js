const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
};
