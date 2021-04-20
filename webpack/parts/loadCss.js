import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const loadCss = () => ({
  loader: 'css-loader',
  options: { importLoaders: 1 },
});

const loadPostCss = (env) => {
  const plugins = [
    // scss nested syntax
    'postcss-nested',
    // scss variables, conditionals, and iterators
    {
      'postcss-advanced-variables': {
        importPaths: ['../src/', '../src/css'],
      },
    },
    // reset browsers default css
    {
      'postcss-normalize': {
        allowDuplicates: false,
        forceImport: 'sanitize.css',
      },
    },
  ];

  if (env === 'prod') {
    plugins.push(
      // experimental css transpilation & autoprefixer
      { 'postcss-preset-env': { stage: 0 } },
      // remove unused css
      {
        '@fullhuman/postcss-purgecss': {
          content: ['**/*.html'],
          // remove unused animations
          keyframes: true,
          // remove unused @font-face rules
          fontFace: true,
        },
      },
      // optimization, minification, autosorting, etc.
      { cssnano: { preset: 'default' } },
    );
  }

  return {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        syntax: 'postcss-scss',
        plugins,
      },
    },
  };
};

export const loadProdCss = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          loadCss(),
          loadPostCss('prod'),
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.[contenthash:5].css',
    }),
  ],
});

export const loadDevCss = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          loadCss(),
          loadPostCss('dev'),
        ],
      },
    ],
  },
});
