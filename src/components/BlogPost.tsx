import Head from "next/head";
import { Meta } from "../types/meta";

interface Props {
    children: React.ReactNode;
    meta: Meta;
}

export default function BlogPost({ children, meta }: Props) {
    return (
        <>
            <Head>
                <title>{meta.pageTitle}</title>
                <meta name="description" content={meta.description}></meta>
            </Head>
            <article>{children}</article>
        </>
    );
}
