import styled from "@emotion/styled";
import {
    Box,
    Flex,
    IconButton,
    Stack,
    useColorMode,
    Button,
    useDisclosure,
    Link,
} from "@chakra-ui/core";
import { navBgColor } from "../../styles/colors";
import React, { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import TheDrawer from "./TheDrawer";

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

const LearnLink = styled(Button)`
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    &:hover {
        color: rgba(64, 158, 246, 0.7841);
    }
`;

const NavBar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure(false);
    const [windowH, setWindowH] = useState<Scroll>({ currentScrollHeight: 0 });
    const btnRef = useRef<React.RefObject<HTMLElement> | undefined>();

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
            maxWidth="1200px"
            width="100%"
            bg={navBgColor[colorMode]}
            as="nav"
            wrap="wrap"
            p={4}
            mt={[3, 10]}
            mb={8}
            mx="auto"
        >
            <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="1200px"
                width="100%"
            >
                <Box display="flex" flexDirection="row">
                    <Box>
                        <NextLink href="/">
                            <Box>
                                {windowH.currentScrollHeight === 0 ? (
                                    <div>
                                        <NextImage
                                            aria-roledescription="Recompiled - Logo"
                                            src="/images/Recompiled-Dark.png"
                                            width={35}
                                            height={35}
                                            alt="Recompiled - Logo"
                                            role="img"
                                            loading="lazy"
                                            quality={100}
                                            className="logo-img"
                                        />
                                    </div>
                                ) : (
                                    <NextImage
                                        aria-roledescription="Recompiled - Logo"
                                        src="/images/Recompiled.png"
                                        width={35}
                                        height={35}
                                        alt="Recompiled - Logo"
                                        role="img"
                                        loading="eager"
                                        quality={100}
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
                        icon={isOpen ? "small-close" : "search"}
                        variant="outline"
                        onClick={onOpen}
                        ref={
                            (btnRef as unknown) as
                                | React.RefObject<HTMLElement>
                                | undefined
                        }
                    />
                    <Box
                        display={["none", "none", "flex", "flex"]}
                        width={["full", "auto"]}
                        alignItems="center"
                        flexGrow={1}
                    >
                        <NextLink href="/about" passHref>
                            <LearnLink
                                variant="ghost"
                                display={[
                                    "block",
                                    windowH.currentScrollHeight === 0
                                        ? "block"
                                        : "none",
                                ]}
                                mt={[4, 0]}
                            >
                                About
                            </LearnLink>
                        </NextLink>

                        <NextLink href="/newsletter" passHref>
                            <LearnLink
                                variant="ghost"
                                ml={[0, 4]}
                                display={[
                                    "block",
                                    windowH.currentScrollHeight === 0
                                        ? "block"
                                        : "none",
                                ]}
                                mt={[4, 0]}
                            >
                                Digital Garden
                            </LearnLink>
                        </NextLink>

                        <NextLink href="/newsletter" passHref>
                            <LearnLink
                                variant="ghost"
                                ml={[0, 4]}
                                display={[
                                    "block",
                                    windowH.currentScrollHeight === 0
                                        ? "block"
                                        : "none",
                                ]}
                                mt={[4, 0]}
                            >
                                Newsletter
                            </LearnLink>
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
                <TheDrawer
                    onClose={onClose}
                    open={isOpen}
                    refObj={(btnRef as unknown) as React.RefObject<HTMLElement>}
                />
            </Stack>
        </StickyNav>
    );
};

export default NavBar;
