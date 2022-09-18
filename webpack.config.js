const paths = require('./webpack-config/paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
	entry: `${paths.src}/index.js`,
	output: {
		path: `${paths.build}`,
		filename: '[name].js',
		clean: true,
	},
	stats: {
		children: true,
	},
	devtool: 'inline-source-map',
	devServer: {
		client: {
			progress: true,
			overlay: {
				errors: true,
				warnings: false,
			},
		},
		historyApiFallback: true,
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
			{
				test: /\.(s[ac]ss|css)$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},

		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack Boilerplate',
			template: `${paths.src}/template.html`,
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].css"
		}),
	],
}
