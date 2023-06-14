const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const IMG_DIR = path.join(__dirname, 'src/images');
module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            'images': IMG_DIR
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext][query]'
                }
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    // 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ],
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    context: 'src/images/common',
                    from: '**/*',
                    to: '../dist/images',
                },
            ],
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8888,
            proxy: 'it-consultis.local',
            open: true,
            cors: true,
            files: [
                {
                    match: ['dist/*.css', 'dist/*.js', '**/**/*.html', '**/**/*.php'],
                    // Exclude specific files from reloading
                    fn: function (event, file) {
                        if (event === 'change' && file.endsWith('.php')) {
                            return false;
                        }
                    },
                },
            ],
            injectChanges: true,
        })
    ],

};

