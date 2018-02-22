'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
	output: {
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		// new BundleAnalyzerPlugin()
	],
	module: {
		rules: [{
			test: /\.js$/,
			include: path.resolve(__dirname, 'src'),
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', {
							modules: false,
							targets: {
								chrome: 64
							},
							useBuiltIns: 'usage'
						}],
						'@babel/preset-react'
					],
					plugins: [
						'@babel/plugin-syntax-dynamic-import'
					]
				}
			}
		}]
	}
};
