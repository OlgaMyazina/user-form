const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'all.min.js',
    path: buildPath
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {loader: "css-loader"},
          {
            loader: 'postcss-loader',
          },
          {loader: "stylus-loader"},

        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'all.min.css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
    })
  ]
};