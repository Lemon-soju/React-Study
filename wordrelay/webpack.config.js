const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client'],
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR', 'last 2 chrome versions'],
                        },
                        debug: true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: ['@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            }
        }],
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },
    devServer: {
        devMiddleware: {publicPath: '/dist/'},
        static: {directory: path.resolve(__dirname)},
        hot: true
    }
};