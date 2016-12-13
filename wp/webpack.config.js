var webpack = require('webpack');

var config = {
	entry:{
		index: './index.js',
		es6: './es6/fun.js',
	},
	output: {
		filename: '[name].entry.js',
	},
	module: {
		loaders:[
			{

				test:/\.jsx?$/,
				exclude: /(node_modules|bower_components)/,

				//babel?presets[]=es2015  for es6
				//webpack-module-hot-accept hot replace
				loaders:['babel?presets[]=es2015','webpack-module-hot-accept']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
};

module.exports = config;