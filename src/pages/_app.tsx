import "../styles/globals.css";
import { AppProps } from "next/app";
import {
    ThemeProvider,
    CSSReset,
    ColorModeProvider,
    useColorMode,
} from "@chakra-ui/core";
import { css, Global } from "@emotion/core";
import { darkTheme, lightTheme } from "../styles/styling";
import theme from "../styles/theme";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/mdx/MDXComponents";
import Container from "../components/layout/TheContainer";

interface StyleProps {
    children: React.ReactNode;
}

const GlobalStyle: React.FC<StyleProps> = ({ children }) => {
    const { colorMode } = useColorMode();

    return (
        <>
            <CSSReset />
            <Global
                styles={css`
                    ${colorMode === "light" ? lightTheme : darkTheme};
                    ::selection {
                        background-color: ${colorMode === "light"
                            ? "rgba(25,166,67,1)"
                            : "rgba(25,166,67,1)"};
                        color: #fefefe;
                    }
                    html {
                        min-width: 360px;
                        scroll-behavior: smooth;
                        background: ${colorMode === "light" ? "rgba(255, 255, 255, 0.8)" : "#131415"};
                    }
                    #__next {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                        background: ${colorMode === "light" ? "rgba(255, 255, 255, 0.8)" : "#131415"};
                    }
                `}
            />
            {children}
        </>
    );
};

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <MDXProvider components={MDXComponents}>
                <ColorModeProvider value="dark">
                    <GlobalStyle>
                        <Container>
                            <Component {...pageProps} />
                        </Container>
                    </GlobalStyle>
                </ColorModeProvider>
            </MDXProvider>
        </ThemeProvider>
    );
}

export default MyApp;
