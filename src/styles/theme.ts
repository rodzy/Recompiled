import { DefaultTheme, theme as chakraTheme } from "@chakra-ui/core";
import { customIcons } from "./icons";

const theme: DefaultTheme = {
    ...chakraTheme,
    fonts: {
        ...chakraTheme.fonts,
        body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700,
        hairline: 0,
        extrabold: 900,
        thin: 100,
        light: 200,
        semibold: 800,
        black: 800,
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "3rem",
        "5xl": "5rem",
        "6xl": "6rem",
    },
    shadows: {
        sm: "",
        md: "rgba(52, 61, 68, 0.1) 0px 1px 2px",
        lg: "rgba(52, 61, 68, 0.1) 0px 3px 6px",
        xl: "rgba(52, 61, 68, 0.1) 0px 5px 10px",
        "2xl": "rgba(52, 61, 68, 0.1) 0px 10px 20px",
        inner: "",
        none: "",
        outline: "0 0 0 3px rgba(64, 158, 246, 0.7841)",
    },
    lineHeights: {
        none: "0rem",
        base: "",
        normal: "",
        short: "2.465rem",
        shorter: "",
        tall: "",
        taller: "",
    },
    icons: {
        ...chakraTheme.icons,
        ...customIcons
    },
};

export default theme;
