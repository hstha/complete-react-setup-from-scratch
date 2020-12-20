const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // the app entry point is index.js
  entry: './index.js',
  output: {
    // the filename of the JS bundle will be bundle[hash].js
    filename: 'bundle.[hash].js',
    // the output of the webpack build will be in /dist dir
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // add a custom index.html as the template
    new HTMLWebpackPlugin({
      template: './index.html'
    })
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        // for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}