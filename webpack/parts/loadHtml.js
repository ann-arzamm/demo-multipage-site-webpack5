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
    }),
  ],
});
