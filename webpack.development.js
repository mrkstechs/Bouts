const path = require('path');
const webpack = require('webpack');

module.exports = () => ({
	output: {
        publicPath: 'http://localhost:8080/',
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|jp(e)g|gif)$/,
                use: [
                        {
                            loader: "file-loader",
                            options: {
                            name: "[name].[ext]"
                            }
                        }
                ]
            }
        ]
    },
	devServer: {
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        compress: true,
        hot: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});