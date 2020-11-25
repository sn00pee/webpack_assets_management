const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'
  const devtool = !isProd ? 'inline-source-map' : false

  const config = {
    devtool,
    entry: {
      main: './src/index',
    },
    output: {
      path: __dirname + '/dist',
      publicPath: isProd ? 'https://r10s.jp/evt/com/e/': '/',
      filename: 'js/[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
            name: '[name].[ext][query]',
          },
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        minify: false,
      }),
    ],
    stats: 'minimal',
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets')
      }
    }
  }

  return config
}
