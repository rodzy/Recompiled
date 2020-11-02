import styled from "@emotion/styled";
import {
    Box,
    Flex,
    IconButton,
    Stack,
    useColorMode,
    Text,
    Button,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import { navBgColor, secondaryTextColor } from "../../styles/colors";
import { upperFirst } from "lodash";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";

const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color 0.1 ease-in-out;
`;

const NavBar: React.FC = () => {
    const router = useRouter();
    const { colorMode, toggleColorMode } = useColorMode();
    const [windowH, setWindowH] = useState({ currentScrollHeight: 0 });

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
                if (windowH.currentScrollHeight != newScrollHeight) {
                    setWindowH({ currentScrollHeight: newScrollHeight });
                }
            };
        }
    }, [windowH.currentScrollHeight === 0]);

    return (
        <StickyNav
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="900px"
            width="100%"
            bg={navBgColor[colorMode]}
            as="nav"
            p={4}
            mt={[3, 6]}
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
                <Box display="flex" flexDirection="row">
                    <Box>
                        <Text
                            pos="fixed"
                            as="span"
                            color={secondaryTextColor[colorMode]}
                            p={3}
                            pl={6}
                            opacity={0.5}
                        >
                            {upperFirst(router.pathname.replace("/", ""))}
                        </Text>
                    </Box>
                </Box>
                <Box>
                    {router.pathname !== "/about" ? (
                        <NextLink href="/about" passHref>
                            <Button
                                variant="outline"
                                opacity={
                                    windowH.currentScrollHeight === 0 ? 1 : 0
                                }
                            >
                                About
                            </Button>
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
                            <Button
                                ml={2}
                                variant="outline"
                                opacity={
                                    windowH.currentScrollHeight === 0 ? 1 : 0
                                }
                            >
                                Newsletter
                            </Button>
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
    );
};

export default NavBar;
