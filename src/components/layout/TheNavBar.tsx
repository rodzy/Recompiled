import styled from "@emotion/styled";
import {
    Box,
    Flex,
    IconButton,
    Stack,
    useColorMode,
    Button,
} from "@chakra-ui/core";
import { navBgColor } from "../../styles/colors";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";

const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color 0.1 ease-in-out;
`;

const NavBar: React.FC = () => {
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
                        <NextLink href="/">
                            <Box>
                                <NextImage
                                    src="/images/Recompiled.png"
                                    width={35}
                                    height={35}
                                    alt="Recompiled - Logo"
                                    role="image"
                                    loading="lazy"
                                    className="logo-img"
                                />
                            </Box>
                        </NextLink>
                    </Box>
                </Box>
                <Box>
                    <NextLink href="/about" passHref>
                        <Button
                            variant="link"
                            opacity={windowH.currentScrollHeight === 0 ? 1 : 0}
                        >
                            About
                        </Button>
                    </NextLink>

                    <NextLink href="/newsletter" passHref>
                        <Button
                            ml={4}
                            variant="link"
                            opacity={windowH.currentScrollHeight === 0 ? 1 : 0}
                        >
                            Blog
                        </Button>
                    </NextLink>
                    <NextLink href="/newsletter" passHref>
                        <Button
                            ml={4}
                            variant="link"
                            opacity={windowH.currentScrollHeight === 0 ? 1 : 0}
                        >
                            Notes
                        </Button>
                    </NextLink>
                    <NextLink href="/newsletter" passHref>
                        <Button
                            ml={4}
                            variant="link"
                            opacity={windowH.currentScrollHeight === 0 ? 1 : 0}
                        >
                            Ideas
                        </Button>
                    </NextLink>
                    <NextLink href="/newsletter" passHref>
                        <Button
                            ml={4}
                            variant="link"
                            opacity={windowH.currentScrollHeight === 0 ? 1 : 0}
                        >
                            Newsletter
                        </Button>
                    </NextLink>
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
