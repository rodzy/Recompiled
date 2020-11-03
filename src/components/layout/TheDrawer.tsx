import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Button,
    Flex,
    Icon,
} from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";
import { plainBg } from "../../styles/colors";
import { useColorMode } from "@chakra-ui/core";

interface DrawerProps {
    refObj: React.RefObject<HTMLElement>;
    onClose: () => void;
    open: boolean;
}

const TheDrawer: React.FC<DrawerProps> = ({ onClose, open, refObj }) => {
    const { colorMode } = useColorMode();

    return (
        <Drawer
            isOpen={open}
            placement="bottom"
            onClose={onClose}
            finalFocusRef={refObj}
            blockScrollOnMount={false}
            closeOnEsc
            scrollBehavior="inside"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerContent
                    bg={plainBg[colorMode]}
                    borderTopLeftRadius="2rem"
                    borderTopRightRadius="2rem"
                >
                    <DrawerHeader
                        boxShadow="md"
                        pt={4}
                        borderBottom={`1px solid rgba(255,255,255,0.16)`}
                        fontWeight="700"
                    >
                        Navigation{" "}
                        <Icon name="up-down" mb={1} p="1px" onClick={onClose} />
                    </DrawerHeader>
                    <DrawerBody mb={10}>
                        <Flex
                            flexDirection="row"
                            justifyContent="space-around"
                            wrap="wrap"
                            width="100%"
                            py={1}
                        >
                            <NextLink href="/" passHref>
                                <Button
                                    leftIcon="arrow-forward"
                                    variant="unstyled"
                                    mt={1}
                                    width="100%"
                                    fontWeight="600"
                                >
                                    Home
                                </Button>
                            </NextLink>
                            <NextLink href="/about" passHref>
                                <Button
                                    leftIcon="at-sign"
                                    variant="unstyled"
                                    mt={4}
                                    width="100%"
                                    fontWeight="600"
                                >
                                    About
                                </Button>
                            </NextLink>

                            <NextLink href="/newsletter" passHref>
                                <Button
                                    leftIcon="external-link"
                                    variant="unstyled"
                                    mt={4}
                                    width="100%"
                                    fontWeight="600"
                                >
                                    Blog
                                </Button>
                            </NextLink>
                            <NextLink href="/newsletter" passHref>
                                <Button
                                    leftIcon="attachment"
                                    variant="unstyled"
                                    mt={4}
                                    width="100%"
                                    fontWeight="600"
                                >
                                    Notes
                                </Button>
                            </NextLink>
                            <NextLink href="/newsletter" passHref>
                                <Button
                                    leftIcon="star"
                                    variant="unstyled"
                                    mt={4}
                                    width="100%"
                                    fontWeight="600"
                                >
                                    Ideas
                                </Button>
                            </NextLink>
                            <NextLink href="/newsletter" passHref>
                                <Button
                                    leftIcon="calendar"
                                    variant="unstyled"
                                    mt={4}
                                    width="100%"
                                    fontWeight="600"
                                >
                                    Newsletter
                                </Button>
                            </NextLink>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </DrawerContent>
        </Drawer>
    );
};

export default TheDrawer;
