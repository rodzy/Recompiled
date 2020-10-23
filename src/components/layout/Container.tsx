import { Flex, useColorMode, IconButton, Box } from "@chakra-ui/core";
import styled from "@emotion/styled";

interface Props {
    children: React.ReactNode;
}

const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color 0.1 ease-in-out;
`;

const Container: React.FC<Props> = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    const bg = {
        light: "#fff",
        dark: "#000",
    };

    const pText = {
        light: "#000",
        dark: "#fff",
    };

    const navBgColor = {
        light: "rgba(255, 255, 255, 0.8)",
        dark: "rgba(23, 25, 35, 0.8)",
    };

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="900px"
                width="100%"
                bg={navBgColor[colorMode]}
                as="nav"
                p={8}
                mt={[0, 8]}
                mb={8}
                mx="auto"
            >
                <IconButton
                    aria-label="Toggle dark mode"
                    icon={colorMode === "dark" ? "sun" : "moon"}
                    onClick={toggleColorMode}
                />
                <Box>
                    <h1>Hi</h1>
                </Box>
                <Flex
                    as="main"
                    justifyContent="center"
                    flexDirection="column"
                    bg={bg[colorMode]}
                    color={pText[colorMode]}
                    px={8}
                >
                    {children}
                </Flex>
            </StickyNav>
        </>
    );
};

export default Container;