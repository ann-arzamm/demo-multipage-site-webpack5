// Core
import path from 'path';
import { WebpackPluginServe as Serve } from 'webpack-plugin-serve';
import WebpackBar from 'webpackbar';

// Dev server options
const options = {
  liveReload: true,
  port: 3000,
  host: '127.0.0.1',
  open: true,
  static: path.join(process.cwd(), 'build'),
};

export const loadDevServer = () => ({
  watch: true, // ! important: webpack and the server will continue to run in watch mode

  entry: [
    'webpack-plugin-serve/client', // ! important: this is required for the dev server
    path.join(process.cwd(), 'src/index.js'),
  ],

  plugins: [new Serve(options)],
});

export const loadWebpackBar = () => ({
  plugins: [
    new WebpackBar(),
  ],
});
