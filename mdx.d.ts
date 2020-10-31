interface FrontMatter {
    __resourcePath: string;
    pageTitle: string;
    pageDescription: string;
    postDate?: string;
    backdropUrl?: string;
}

declare module "*.mdx" {
    let MDXComponent: (props: any) => JSX.Element;
    export default MDXComponent;
    export const frontMatter: FrontMatter[];
}
