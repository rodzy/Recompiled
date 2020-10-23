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
        black: 1000,
    },
    icons: {
        ...chakraTheme.icons,
    },
};

export default theme;
