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

interface Scroll {
    currentScrollHeight: number;
}

const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color 0.1 ease-in-out;
`;

const NavBar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [windowH, setWindowH] = useState<Scroll>({ currentScrollHeight: 0 });
    const [open, setOpen] = useState<boolean>(false);

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
            mt={[3, 10]}
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
                                {windowH.currentScrollHeight === 0 ? (
                                    <div>
                                        <NextImage
                                            src="/images/Recompiled-Dark.png"
                                            width={35}
                                            height={35}
                                            alt="Recompiled - Logo"
                                            role="image"
                                            loading="eager"
                                            className="logo-img"
                                        />
                                    </div>
                                ) : (
                                    <NextImage
                                        src="/images/Recompiled.png"
                                        width={35}
                                        height={35}
                                        alt="Recompiled - Logo"
                                        role="image"
                                        loading="eager"
                                        className="logo-img"
                                    />
                                )}
                            </Box>
                        </NextLink>
                    </Box>
                </Box>
                <Flex>
                    <IconButton
                        aria-label="Menu"
                        display={["block", "block", "none", "none"]}
                        icon={open ? "small-close" : "search"}
                        variant="outline"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                    <Box
                        display={[
                            open ? "block" : "none",
                            open ? "block" : "none",
                            "flex",
                            "flex",
                        ]}
                        width={["full", "auto"]}
                        alignItems="center"
                        flexGrow={1}
                    >
                        <NextLink href="/about" passHref>
                            <Button
                                variant="link"
                                display={[
                                    "block",
                                    windowH.currentScrollHeight === 0
                                        ? "block"
                                        : "none",
                                ]}
                            >
                                About
                            </Button>
                        </NextLink>

                        <NextLink href="/newsletter" passHref>
                            <Button
                                ml={4}
                                variant="link"
                                display={[
                                    "block",
                                    windowH.currentScrollHeight === 0
                                        ? "block"
                                        : "none",
                                ]}
                            >
                                Blog
                            </Button>
                        </NextLink>
                        <NextLink href="/newsletter" passHref>
                            <Button
                                ml={4}
                                variant="link"
                                display={[
                                    "block",
                                    windowH.currentScrollHeight === 0
                                        ? "block"
                                        : "none",
                                ]}
                            >
                                Notes
                            </Button>
                        </NextLink>
                        <NextLink href="/newsletter" passHref>
                            <Button
                                ml={4}
                                variant="link"
                                display={[
                                    "block",
                                    windowH.currentScrollHeight === 0
                                        ? "block"
                                        : "none",
                                ]}
                            >
                                Ideas
                            </Button>
                        </NextLink>
                        <NextLink href="/newsletter" passHref>
                            <Button
                                ml={4}
                                variant="link"
                                display={[
                                    "block",
                                    windowH.currentScrollHeight === 0
                                        ? "block"
                                        : "none",
                                ]}
                            >
                                Newsletter
                            </Button>
                        </NextLink>
                    </Box>
                    <IconButton
                        aria-label="Toggle dark mode"
                        variant="outline"
                        icon={colorMode === "dark" ? "sun" : "moon"}
                        onClick={toggleColorMode}
                        ml={3}
                    />
                </Flex>
            </Stack>
        </StickyNav>
    );
};

export default NavBar;
