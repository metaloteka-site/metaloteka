const paths = require('./webpack-config/paths')
const namePages = require('./src/app/list-pages/namePages').names
const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin')
const magicImporter = require('node-sass-magic-importer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//
let plugins = [];
let links = [];

fs.readdirSync('./src/pages/').forEach(dirPage => {

	const arrPage = fs.readdirSync(`./src/pages/${dirPage}/`)

	arrPage.forEach(page=> {
		if (path.extname(page) === ".pug") {

			// Преобразование страниц pug в html
			plugins.push(
				new HtmlWebpackPlugin({
					template: `./src/pages/${dirPage}/${page}`,
					filename: `./${path.basename(page, '.pug')}.html`,
					inject: 'body',
				})
			)

			// Создание объекта с данными страниц
			links.push({
				link: `./${dirPage}.html`,
				title: dirPage,
				name: `${namePages(page)}`
			})
		}
	})

})

plugins.push(
	new HtmlWebpackPlugin({
		template: './src/app/list-pages/list-pages.pug',
		filename: './list-pages.html',
		inject: 'body',
	}),
	new BeautifyHtmlWebpackPlugin({
		'indent_size': 2,
		'indent_char': ' ',
		'indent_with_tabs': true,
		'editorconfig': true,
	}),
	new MiniCssExtractPlugin({
		filename: 'css/[name].css'
	}),
)

module.exports = {
	entry: {
		app: `${paths.src}/app/app.js`,
	},
	output: {
		path: `${paths.build}`,
		filename: 'js/[name].js',
		publicPath: '/',
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
		open: 'list-pages.html',
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
						loader: 'html-loader'
					},
					{
						loader: 'pug-html-loader',
						options: {
							data: {
								listLinks: links
							},
							interpolate: true,
							pretty: false
						}
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
	plugins: plugins,
}
