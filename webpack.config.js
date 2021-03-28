const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  mode: env.NODE_ENV || 'development',

  performance: {
    hints: false,
  },

  devtool: env.NODE_ENV === 'development' ? 'eval-source-map' : false,

  output: {
    path: path.resolve('build'),
    publicPath: '/',
    filename: 'index.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less'],
    alias: {
      process: 'process/browser',
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: /src/,
        use: [
          { loader: 'ts-loader', options: { onlyCompileBundledFiles: true } },
          '@eastbanctechru/true-react-ui-kit/dist/theme-loader',
          'webpack-conditional-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env.NODE_ENV),
        THEME: JSON.stringify(process.env.THEME),
      },
    }),
  ],

  devServer: {
    contentBase: './src',
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    host: 'localhost',
    port: '3030',
  },
});
