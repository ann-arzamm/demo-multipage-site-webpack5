// Core
import path from 'path';

// Config merge
import { merge } from 'webpack-merge';
import * as modules from './parts/index.js';

export default () => merge(
  modules.loadHtml(),
  modules.loadWebpackBar(),
  modules.loadAssets(),

  {
    context: process.cwd(),

    output: {
      path: path.join(process.cwd(), 'build'),
      publicPath: '',

    },
  },
);
