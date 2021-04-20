// Config merge
import { merge } from 'webpack-merge';
import getCommon from './webpack.common.js';
import * as modules from './parts/index.js';

export default () => merge(
  getCommon(),
  modules.loadDevCss(),
  modules.loadDevServer(),

  {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',

    output: {
      filename: 'js/bundle.js',
      chunkFilename: 'js/[name].chunk.js',
    },
  },
);
