import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import theme from "../styles/theme";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/mdx/MDXComponents";
import Container from "../components/layout/TheContainer";
import GlobalStyle from "../components/GlobalStyle";
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config.js'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <MDXProvider components={MDXComponents}>
                <ColorModeProvider value="dark">
                    <GlobalStyle>
                        <Container>
                            <DefaultSeo {...SEO}/>
                            <Component {...pageProps} />
                        </Container>
                    </GlobalStyle>
                </ColorModeProvider>
            </MDXProvider>
        </ThemeProvider>
    );
}

export default MyApp;
