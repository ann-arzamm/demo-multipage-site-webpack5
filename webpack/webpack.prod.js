// Core
import path from 'path';

// Config merge
import { merge } from 'webpack-merge';
import getCommon from './webpack.common.js';
import * as modules from './parts/index.js';

export default () => merge(
  getCommon(),
  modules.loadProdCss(),
  modules.loadProdJS(),

  {
    mode: 'production',
    devtool: 'source-map',
    stats: 'errors-only',

    // Exit bundling process on the first error instead of tolerating it
    bail: true,

    entry: path.join(process.cwd(), 'src/index.js'),
    output: {
      filename: 'js/[name].[contenthash:8].js',
      chunkFilename: 'js/[name].[contenthash:8].chunk.js',
      clean: true,
    },

    optimization: {
      // js tree-shacking
      sideEffects: true,
      providedExports: true,

      // extract webpack runtime code as a separate 'runtime' chunk
      runtimeChunk: { name: 'runtime' },

      splitChunks: {
        // chunks to be selected for optimization
        chunks: 'all',
        // creates a runtime chunk to be shared for all generated chunks
        name: 'runtime',

        // extract third-party libraries as a separate 'vendor' chunk
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  },
);
