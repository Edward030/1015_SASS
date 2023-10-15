const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/scripts.js', './src/method.js'],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: './js/bundle.js',
  },
  //module setting is necessary
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true, //要把index.html <scripts>刪除
      minify: true,
    }),
    new MiniCssExtractPlugin({
      //new file final place
      filename: './css/styles.css',
    }),
  ],
  devServer: {
    port: 3000,
  },
};