import { NextSeo } from "next-seo";

interface Props {
    frontMatter: FrontMatter;
}

// TODO @ Figure how to use dynamic images for blog posts
const MDXSeo: React.FC<Props> = ({ frontMatter }) => {
    const { pageTitle, pageDescription, postDate, backdropUrl } = frontMatter;

    return (
        <NextSeo
            title={pageTitle}
            description={pageDescription}
            canonical={backdropUrl}
            openGraph={{
                type: "article",
                article: {
                    publishedTime: postDate,
                },
                url: backdropUrl,
                title: pageTitle,
                description: pageDescription,
            }}
        />
    );
};

export default MDXSeo;
