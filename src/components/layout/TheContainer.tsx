import {
    Flex,
    useColorMode,
    IconButton,
    Box,
    Stack,
} from "@chakra-ui/core";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Footer from "./TheFooter";
import { navBgColor, bg, pText } from "../../styles/colors";
import NextImage from "next/image";

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
                mt={[0, 6]}
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
                        <NextLink href="/">
                            <div>
                                <NextImage
                                    src="/images/Recompiled.png"
                                    width={35}
                                    height={35}
                                    alt="Recompiled - Logo"
                                    role="image"
                                    loading="lazy"
                                    className="logo-img"
                                />
                            </div>
                        </NextLink>
                    </Box>
                    <Box>
                        {router.pathname !== "/about" ? (
                            <NextLink href="/about" passHref>
                                <IconButton
                                    aria-label="About me"
                                    variant="outline"
                                    icon="attachment"
                                    ml={3}
                                />
                            </NextLink>
                        ) : (
                            <NextLink href="/" passHref>
                                <IconButton
                                    aria-label="Back to the homepage"
                                    variant="outline"
                                    icon="triangle-up"
                                    ml={3}
                                />
                            </NextLink>
                        )}
                        {router.pathname !== "/newsletter" ? (
                            <NextLink href="/newsletter" passHref>
                                <IconButton
                                    aria-label="Subscribe to the newsletter"
                                    variant="outline"
                                    icon="bell"
                                    ml={3}
                                />
                            </NextLink>
                        ) : (
                            <NextLink href="/" passHref>
                                <IconButton
                                    aria-label="Back to the homepage"
                                    variant="outline"
                                    icon="triangle-up"
                                    ml={3}
                                />
                            </NextLink>
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
