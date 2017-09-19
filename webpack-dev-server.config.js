const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'public');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  // Entry points to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    'jquery/dist/jquery.min.js',
    //  path.join(__dirname, '/public/jquery-ui.min.js'),
       path.join(__dirname, '/public/js/bootstrap.min.js'),
       path.join(__dirname, '/src/app/app.js'),
    //  path.join(__dirname, '/public/jquery.backstretch.min.js'),
    //  path.join(__dirname, '/public/login_scripts.js'),
  ],
  // Server Configuration options
  devServer: {
    contentBase: 'public', // Relative directory for base of server
    devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  devtool: 'eval',
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js',
  },
  externals: {
    jQuery:"jquery"
  },
  resolve: {
        alias: {
            jquery: "jquery/dist/jquery.min.js"
        }
  },  
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery",
      jQuery:"jquery"
    }),
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Moves files
    new TransferWebpackPlugin([
      {from: '../public'},
    ], path.resolve(__dirname, 'src')),
  ],
  module: {
    loaders: [
      {
        // React-hot loader and
        test: /\.js$/, // All .js files
        loaders: ['react-hot', 'babel-loader', 'babel?presets[]=react,presets[]=es2015' ], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|ttf|eot|woff|woff2/, loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"}
    ],
  },
};

module.exports = config;
