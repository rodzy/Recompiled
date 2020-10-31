import fs from "fs";
import path from "path";

export function getAllFileNames(params: any) {
    const filename = path.join("src/pages/posts", params.slug + ".mdx");

    return {
        props: {
            filename,
        },
    };
}

export function getFilesPaths() {
    const postsDirectory = path.join(process.cwd(), "src/pages/posts");
    const mdxFiles = fs.readdirSync(postsDirectory);
    console.log("the queried pages", mdxFiles);
    // Loop through all post files and create array of slugs (to create links)
    const paths = mdxFiles.map((filename) => ({
        params: {
            slug: filename.replace(".mdx", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}
