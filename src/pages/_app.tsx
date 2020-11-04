import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import theme from "../styles/theme";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/mdx/MDXComponents";
import Container from "../components/layout/TheContainer";
import GlobalStyle from "../components/GlobalStyle";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config.js";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <MDXProvider components={MDXComponents}>
                <ColorModeProvider value="dark">
                    <GlobalStyle>
                        <Head>
                            <meta
                                content="IE=edge"
                                httpEquiv="X-UA-Compatible"
                            />
                            <meta
                                content="width=device-width, initial-scale=1"
                                name="viewport"
                            />
                            <meta
                                httpEquiv="Content-Type"
                                content="text/html; charset=utf-8"
                            />
                            <meta
                                name="msapplication-TileColor"
                                content="#2b5797"
                            />
                            <meta
                                name="msapplication-config"
                                content="/favicons/browserconfig.xml"
                            />
                            <meta name="theme-color" content="#ffffff" />
                        </Head>
                        <Container>
                            <DefaultSeo {...SEO} />
                            <Component {...pageProps} />
                        </Container>
                    </GlobalStyle>
                </ColorModeProvider>
            </MDXProvider>
        </ThemeProvider>
    );
}

export default MyApp;
