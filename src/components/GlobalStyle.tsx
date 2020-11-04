import { CSSReset, useColorMode } from "@chakra-ui/core";
import { css, Global } from "@emotion/core";
import React from "react";
import { lightTheme, darkTheme } from "../styles/styling";

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
                            ? "#000"
                            : "#000"};
                        color: #fefefe;
                    }
                    html {
                        min-width: 360px;
                        scroll-behavior: smooth;
                        background: ${colorMode === "light"
                            ? "rgba(255, 255, 255, 0.8)"
                            : "#131415"};
                    }
                    #__next {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                        background: ${colorMode === "light"
                            ? "rgba(255, 255, 255, 0.8)"
                            : "rgba(19,20,21,0.45)"};
                    }
                `}
            />
            {children}
        </>
    );
};

export default GlobalStyle;
