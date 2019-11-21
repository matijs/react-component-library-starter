module.exports = {
    tabWidth: 4,
    singleQuote: true,
    quoteProps: 'consistent',
    trailingComma: 'all',
    proseWrap: 'always',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
