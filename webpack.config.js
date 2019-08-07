const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
                test: /\.(html)$/,
                use: { loader: "html-loader" }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    mode: 'none'
};