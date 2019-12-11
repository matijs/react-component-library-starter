const sass = require('sass');

module.exports = ({ config }) => {
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            use: 'awesome-typescript-loader',
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                { loader: 'sass-loader', options: { implementation: sass } },
            ],
        },
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
