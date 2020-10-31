const withMDXEnhanced = require("next-mdx-enhanced")({
    layoutPath: "src/components/layout",
    defaultLayout: true,
    fileExtensions: ["mdx"],
    usesSrc: true,
    remarkPlugins: [
        require("remark-autolink-headings"),
        require("remark-code-titles"),
        require("remark-slug"),
    ],
    extendFrontMatter: {
        process: (mdxContent) => ({
            wordCount: mdxContent.split(/\s+/gu).length,
        }),
    },
});

module.exports = withMDXEnhanced({
    pageExtensions: ["md", "mdx", "jsx", "js", "ts", "tsx"],
    typescript: {
        ignoreDevErrors: true,
    },
});
