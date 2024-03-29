const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
    return {
        mode:
            typeof argv.mode !== 'undefined' && argv.mode === 'production'
                ? 'production'
                : 'development',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'assets'),
            filename: '[name].[contenthash:6].js',
            clean: true,
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        devServer: {
            static: {
                directory: path.join(__dirname, ''),
            },
            devMiddleware: {
                writeToDisk: true,
            },
            compress: true,
            port: 9000,
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /static[/\\][^/\\]+\.svg$/,
                    type: 'asset/inline',
                    exclude: /static[/\\][^/\\]+\.svg$/
                },
                {
                    test: /static[/\\][^/\\]+\.svg$/,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack'],
                },
            ],
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: 'static/assets/images', to: 'images' },
                    {
                        from: 'static/assets/images/apple-touch-icon.png',
                        to: path.resolve(__dirname, 'favicon.png'),
                    },
                ],
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash:6].css',
            }),
            new HtmlWebpackPlugin({
                title:'',
                meta: {
                    charset: 'UTF-8',
                    viewport:
                        'width=device-width, initial-scale=1, shrink-to-fit=no',
                    'theme-color': '#000',
                    description:
                        'Sharwan is an experienced web and mobile application developer.',
                    author: 'Sharwan Kami <sharwan@gmail.com>',
                    keywords:
                        'Sharwan Kami, sharwan, react, react.js, nodejs, typescript, javascript, php, api, developer, portfolio, website design, css, web design, interactive, ia, ux, usability',
                },
                inject: 'body',
                templateContent: ({ htmlWebpackPlugin }) => `<!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Sharwan Kami | Web Developer from Viken, Norway</title>
                <link rel="icon" type="image/png" href="favicon.png" />
                <link rel="manifest" href="assets/images/manifest.json">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
            </head>
            <body>
                <div id="sk-app">Welcome!</div>
            </body>
            </html>`,
                filename: '../index.html',
            }),
        ],
    }
}
