const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const publicPath = ''

module.exports = {
	devtool: 'source-map',
	entry: {
		app: resolve('/src/app.js'),
		common: resolve('/src/static/common.js'),
	},
	output: {
		filename: 'assets/[name].js',
		path: resolve('/build'),
		publicPath: publicPath,
	},
	resolve: {
		alias: {
			src: resolve('/src'),
			components: resolve('/src/components'),
			vue: resolve('/node_modules/vue/dist/vue.min.js'),
		}
	},
	plugins: [
		new ExtractTextPlugin("assets/style.css"),
		new HtmlWebpackPlugin({
			inject: false,
      		filename: 'index.html',
      		template: 'src/index.html',

      		publicPath: publicPath,
		}),
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
		          loaders: {
		            css: ['vue-style-loader','css-loader'],
		            scss: ['vue-style-loader','css-loader','sass-loader'],
		            sass: ['vue-style-loader','css-loader','sass-loader'],
		          },
		        }
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(['css-loader'])
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			}

		]
	},
}


function resolve(dir){
	return path.join(__dirname, dir)
}