const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin/build');


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'serviceWorker.bundle.js',
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp("^https://restaurant-api.dicoding.dev/"),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-apps',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    })
  ]
});
