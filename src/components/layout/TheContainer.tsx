import {
    Flex,
    useColorMode,
    IconButton,
    Box,
    Stack,
    Text,
} from "@chakra-ui/core";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
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
    const router = useRouter();

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
                p={3}
                mt={[0, 3]}
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
                    <Box>
                        <Text as="h1" fontSize={23} fontWeight={800} pt={2}>
                            <span style={{ color: "#00b034" }}>Re</span>compiled
                        </Text>
                    </Box>
                    <Box>
                        {router.pathname !== "/about" ? (
                            <Link href="/about" passHref>
                                <IconButton
                                    aria-label="About me"
                                    variant="outline"
                                    icon="attachment"
                                    ml={3}
                                />
                            </Link>
                        ) : (
                            <Link href="/" passHref>
                                <IconButton
                                    aria-label="Back to the homepage"
                                    variant="outline"
                                    icon="triangle-up"
                                    ml={3}
                                />
                            </Link>
                        )}
                        {router.pathname !== "/newsletter" ? (
                            <Link href="/newsletter" passHref>
                                <IconButton
                                    aria-label="Subscribe to the newsletter"
                                    variant="outline"
                                    icon="bell"
                                    ml={3}
                                />
                            </Link>
                        ) : (
                            <Link href="/" passHref>
                                <IconButton
                                    aria-label="Back to the homepage"
                                    variant="outline"
                                    icon="triangle-up"
                                    ml={3}
                                />
                            </Link>
                        )}
                        <IconButton
                            aria-label="Toggle dark mode"
                            variant="outline"
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
                <Footer />
            </Flex>
        </>
    );
};

export default Container;
