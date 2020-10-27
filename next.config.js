const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    pageExtensions: ["md", "mdx", "jsx", "js", "ts", "tsx"],
    typescript: {
        ignoreDevErrors: true,
    },
});
