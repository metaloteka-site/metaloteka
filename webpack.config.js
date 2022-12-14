const paths = require('./webpack-config/paths');
const namePages = require('./src/app/list-pages/namePages').names;
const fs = require('fs');
const path = require('path');
const PugLintPlugin = require('puglint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');
const magicImporter = require('node-sass-magic-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

let plugins = [];
let links = [];

fs.readdirSync('./src/pages/').forEach((dirPage) => {
	const arrPage = fs.readdirSync(`./src/pages/${dirPage}/`);

	arrPage.forEach((page) => {
		if (path.extname(page) === '.pug') {
			// Преобразование страниц pug в html
			plugins.push(
				new HtmlWebpackPlugin({
					template: `./src/pages/${dirPage}/${page}`,
					filename: `./${path.basename(page, '.pug')}.html`,
					inject: 'body',
				})
			);

			// Создание объекта с данными страниц
			links.push({
				link: `./${dirPage}.html`,
				title: dirPage,
				name: `${namePages(page)}`,
			});
		}
	});
});

plugins.push(
	new PugLintPlugin({
		context: 'src',
		files: '**/*.pug',
		config: Object.assign({ emitError: true }, require('./.pug-lintrc')),
	}),
	new HtmlWebpackPlugin({
		template: './src/app/list-pages/list-pages.pug',
		filename: './list-pages.html',
		inject: 'body',
	}),
	new BeautifyHtmlWebpackPlugin({
		indent_size: 2,
		indent_char: ' ',
		indent_with_tabs: true,
		editorconfig: true,
	}),
	new MiniCssExtractPlugin({
		filename: 'css/[name].css',
	})
);

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
		loggingDebug: ['sass-loader'],
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
						loader: 'html-loader',
					},
					{
						loader: 'pug-html-loader',
						options: {
							data: {
								listLinks: links,
							},
							interpolate: true,
							pretty: false,
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]',
				},
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
				},
			},
			{
				test: /\.(s[ac]ss|css)$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
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
		],
	},
	optimization: {
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							['gifsicle', { interlaced: true }],
							['mozjpeg', { quality: 85 }],
							['pngquant', { optimizationLevel: 6 }],
							[
								'svgo',
								{
									plugins: [
										{
											name: 'preset-default',
											params: {
												overrides: {
													removeViewBox: false,
													addAttributesToSVGElement: {
														params: {
															attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
														},
													},
												},
											},
										},
									],
								},
							],
						],
					},
				},
			}),
		],
	},
	plugins: plugins,
};
