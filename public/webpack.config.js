const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
    let mode = 'development';

    const plugins = [];

    if (!argv.watch) {
        mode = 'production';

        plugins.push(new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'webpack-report.html',
            openAnalyzer: false
        }));
    }

    return {
        mode,
        devtool: false,
        entry: {
            main: ['./src/scripts/main']
        },
        output: {
            path: path.resolve(__dirname, './build/'),
            publicPath: '/project/frontend/'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all',
                        enforce: true
                    }
                }
            },
            runtimeChunk: {
                name: 'runtime'
            },
            minimizer: [
                new TerserPlugin()
            ]
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {from: "../vendor/shadown125/susanoo/public/build/", to: "susanoo/"},
                ]
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|mjs)$/,
                    exclude: [
                        /\bcore-js\b/,
                        /\bwebpack\/buildin\b/
                    ],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                    resolve: {
                        // https://webpack.js.org/configuration/module/#resolvefullyspecified
                        fullySpecified: false
                    }
                },
                {
                    test: require.resolve('jquery'),
                    use: [
                        {
                            loader: 'expose-loader',
                            options: {
                                exposes: ['$', 'jQuery']
                            }
                        }
                    ]
                }
            ]
        }
    };
};