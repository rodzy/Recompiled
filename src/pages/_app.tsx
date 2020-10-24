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
                        background-color: #00b034;
                        color: #fefefe;
                    }
                    html {
                        min-width: 360px;
                        scroll-behavior: smooth;
                        background: ${colorMode === "light" ? "white" : "#000"};
                    }
                    #__next {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                        background: ${colorMode === "light" ? "white" : "#000"};
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
            <ColorModeProvider value="dark">
                <GlobalStyle>
                    <Component {...pageProps} />
                </GlobalStyle>
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default MyApp;
