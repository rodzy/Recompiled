import { DefaultTheme, theme as chakraTheme } from "@chakra-ui/core";

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
        "3xl": "1.80rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
    },
    shadows: {
        sm: "",
        md: "",
        lg: "",
        xl: "",
        "2xl": "",
        inner: "",
        none:"",
        outline:"0 0 0 3px rgb(76 175 80 / 64%)"
    },
    lineHeights: {
        none:"0rem",
        base: "",
        normal: "",
        short: "2.465rem",
        shorter: "",
        tall: "",
        taller:"",
    },
    icons: {
        ...chakraTheme.icons,
    },
};

export default theme;
