const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.[hash].js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	].filter(Boolean),
	resolve: {
		modules: [__dirname, "src", "node_modules"],
		extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
		alias: {
			"@Src": path.resolve(__dirname, "src"),
			"@Actions": path.resolve(__dirname, "src", "actions"),
			"@Components": path.resolve(__dirname, "src", "components"),
			"@Pages": path.resolve(__dirname, "src", "pages"),
			"@Reducers": path.resolve(__dirname, "src", "reducers"),
			"@Routing": path.resolve(__dirname, "src", "routing"),
			"@Services": path.resolve(__dirname, "src", "services"),
			"@Utils": path.resolve(__dirname, "src", "utils"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: {
					loader: require.resolve("babel-loader"),
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.png|svg|jpg|gif$/,
				use: ["file-loader"],
			},
		],
	},
	devServer: {
		port: 4446,
		hot: true,
	},
};
