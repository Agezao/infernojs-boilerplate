const webpack = require('webpack'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      path = require('path');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader'
		}]
	},
	devServer: {
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					return '/dist/index.html';
				}
			}
		}
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
	      minimize : true,
	      compress: {
	          warnings: false
	      }
	    }),
		new CopyWebpackPlugin([
	        { from: 'app/index.html', to: 'index.html' },
	        { from: 'node_modules/spookycss/css/spooky.min.css', to: 'vendors/css/spooky.min.css' }
	      ]),
		new webpack.HotModuleReplacementPlugin()
	]
};