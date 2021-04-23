// Core
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default () => ({
  module: {
    rules: [
      { test: /\.html$/, loader: 'html-loader' },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'src/index.html'),
      inject: 'body',
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'src/services.html'),
      inject: 'body',
      chunks: ['index'],
      filename: 'services.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'src/product.html'),
      inject: 'body',
      chunks: ['index'],
      filename: 'product.html',
    }),
    // new HtmlWebpackPlugin({
    //   template: path.join(process.cwd(), 'src/technology.html'),
    //   inject: 'body',
    //   chunks: ['index'],
    //   filename: 'technology.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.join(process.cwd(), 'src/about.html'),
    //   inject: 'body',
    //   chunks: ['index'],
    //   filename: 'about.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.join(process.cwd(), 'src/client.html'),
    //   inject: 'body',
    //   chunks: ['index'],
    //   filename: 'client.html',
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.join(process.cwd(), 'src/partner.html'),
    //   inject: 'body',
    //   chunks: ['index'],
    //   filename: 'partner.html',
    // }),
  ],
});
