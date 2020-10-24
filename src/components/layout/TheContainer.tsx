import {
    Flex,
    useColorMode,
    IconButton,
    Box,
    Stack,
    Button,
} from "@chakra-ui/core";
import styled from "@emotion/styled";
import Link from "next/link";
import Footer from "./TheFooter";

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
        dark: "#000",
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
                p={5}
                mt={[0, 8]}
                mb={8}
                mx="auto"
            >
                <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    maxWidth="900px"
                    width="100%"
                >
                    <Box>Recompiled</Box>
                    <Box>
                        <Link href="/" passHref>
                            <Button as="a" variant="ghost" p={[1, 4]}>
                                Home
                            </Button>
                        </Link>
                        <Link href="/newsletter" passHref>
                            <Button as="a" variant="ghost" p={[1, 4]}>
                                Newsletter
                            </Button>
                        </Link>
                        <IconButton
                            aria-label="Toggle dark mode"
                            icon={colorMode === "dark" ? "sun" : "moon"}
                            onClick={toggleColorMode}
                            ml={3}
                        />
                    </Box>
                </Stack>
            </StickyNav>
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
            <Footer text="In page"/>
        </>
    );
};

export default Container;
