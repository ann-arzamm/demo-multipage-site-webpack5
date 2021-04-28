import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const loadCss = () => ({
  loader: 'css-loader',
  options: { importLoaders: 1 },
});

const loadPostCss = (env) => {
  const plugins = [
    // reset browsers default css
    {
      'postcss-normalize': {
        allowDuplicates: false,
        forceImport: 'sanitize.css',
      },
    },
    // scss variables, conditionals, and iterators
    {
      'postcss-advanced-variables': {
        importPaths: ['../src/', '../src/css'],
      },
    },
    // scss nested syntax
    'postcss-nested',
  ];

  if (env === 'prod') {
    plugins.unshift(
      // optimization, minification, autosorting, etc.
      { cssnano: { preset: 'default' } },
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
      // experimental css transpilation & autoprefixer
      { 'postcss-preset-env': { stage: 0 } },
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
        test: /\.(scss|css)$/i,
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
        test: /\.(scss|css)$/i,
        use: [
          'style-loader',
          loadCss(),
          loadPostCss('dev'),
        ],
      },
    ],
  },
});
