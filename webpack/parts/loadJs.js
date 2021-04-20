export default () => ({
  module: {
    rules: [
      // JS transpilation
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  // for polyfills tree-shacking
                  useBuiltIns: 'usage',
                  corejs: '3.10',
                  // fixes for broken stuff
                  bugfixes: true,
                  // strict specification use
                  spec: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
});
