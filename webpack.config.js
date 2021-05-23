const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'dist', 'index'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: '/dist/',
    filename: "index.js",
    chunkFilename: '[name].js'
  },
  /**
   * If you want to use ts-loder, please setup alias for webpack.
   */
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src')
  //   },
  //   extensions: ['.ts']
  // },
  // module: {
  //   rules: [{
  //     test: /.tsx?$/,
  //     include: [
  //       path.resolve(__dirname, 'src')
  //     ],
  //     exclude: [
  //       path.resolve(__dirname, 'node_modules')
  //     ],
  //     loader: 'ts-loader'
  //   }]
  // },
  resolve: {
    extensions: ['.json', '.js', '.jsx', 'ts', 'tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: '../output.md'
    })
  ],
  devtool: 'source-map',
  // devServer: {
  //   contentBase: path.join(__dirname, '/dist/'),
  //   inline: true,
  //   host: 'localhost',
  //   port: 8080,
  // }
};