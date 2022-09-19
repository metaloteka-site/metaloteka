const paths = require('./webpack-config/paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');
const magicImporter = require('node-sass-magic-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
	entry: {
		app: `${paths.src}/app.js`
},
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
		open: 'list.html',
		compress: true,
		hot: true,
		port: 8080,
		watchFiles: 'src/**/*.pug',
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: [
					{
						loader: "pug-loader",
						options: {
							pretty: false,
							query: {
									linkslist: 'sdsdsd'
							}
						},
					}
				]
			},
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
							sassOptions: {
								importer: magicImporter(),
							},
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
			template: `${paths.src}/index.pug`,
			filename: 'index.html',
			inject: 'body',
		}),
		new HtmlWebpackPlugin({
			template: `${paths.src}/list.pug`,
			filename: 'list.html',
			inject: 'body',
		}),
		new BeautifyHtmlWebpackPlugin({
			"indent_size": 2,
			"indent_char": " ",
			"indent_with_tabs": true,
			"editorconfig": true,
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].css"
		}),
	],
}
