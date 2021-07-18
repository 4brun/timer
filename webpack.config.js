const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'development',
   entry: './js/main.js',
   output: {
      path: resolve(__dirname, 'build'),
      filename: 'main.[contenthash].js'
   },
   module: {
      rules: [
         {
            test: /\.mp3$/,
            loader: 'file-loader',
            options: {
               name: '[path][name].[ext]',
            }
         },
         {
            test: /\.css$/,
            use: [miniCssExtractPlugin.loader, 'css-loader'],
         },
      ],

   },
   plugins: [
      new htmlWebpackPlugin({
         template: resolve(__dirname, 'index.html')
      }),
      new miniCssExtractPlugin({
         filename: '[name][contenthash].css'
      })
   ]
}