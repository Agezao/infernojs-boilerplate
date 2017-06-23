const webpack = require('webpack'),
      CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: '/dist/',
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
		new CopyWebpackPlugin([
	        { from: 'app/index.html', to: 'dist/index.html' }
	      ]),
		new webpack.HotModuleReplacementPlugin()
	]
};