const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const devtool = argv.mode === 'development' ? 'inline-source-map' : false

  const config = {
    devtool,
    entry: {
      main: './src/index',
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].js',
    },
    module: {
      rules: [],
    },
    plugins: [new CleanWebpackPlugin()],
    stats: 'minimal',
  }

  return config
}
