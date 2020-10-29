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
                            ? "rgba(25,166,67,1)"
                            : "rgba(25,166,67,1)"};
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
                            : "#131415"};
                    }
                `}
            />
            {children}
        </>
    );
};

export default GlobalStyle;
