import Head from "next/head";
import Container from "../layout/TheContainer";

interface Props {
    children: React.ReactNode;
    pageTitle: string;
    description: string;
}

const MDXLayout: React.FC<Props> = ({ children, pageTitle, description }) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description}></meta>
            </Head>
            <Container>
                <article>{children}</article>
            </Container>
        </>
    );
};

export default MDXLayout;
