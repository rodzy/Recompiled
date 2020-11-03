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
                        <Icon name="drag-handle" mb={1} p="1px" /> Navigation
                    </DrawerHeader>
                    <DrawerBody mb={10}>
                        <Flex
                            flexDirection="row"
                            justifyContent="space-around"
                            wrap="wrap"
                            width="100%"
                            py={2}
                        >
                            <NextLink href="/" passHref>
                                <Button
                                    leftIcon="arrow-forward"
                                    variant="outline"
                                    mt={4}
                                    width="48%"
                                    boxShadow="md"
                                    fontWeight="600"
                                >
                                    Home
                                </Button>
                            </NextLink>
                            <NextLink href="/about" passHref>
                                <Button
                                    leftIcon="at-sign"
                                    variant="outline"
                                    mt={4}
                                    width="48%"
                                    boxShadow="md"
                                    fontWeight="600"
                                >
                                    About
                                </Button>
                            </NextLink>

                            <NextLink href="/newsletter" passHref>
                                <Button
                                    leftIcon="external-link"
                                    variant="outline"
                                    mt={4}
                                    width="48%"
                                    boxShadow="md"
                                    fontWeight="600"
                                >
                                    Blog
                                </Button>
                            </NextLink>
                            <NextLink href="/newsletter" passHref>
                                <Button
                                    leftIcon="attachment"
                                    variant="outline"
                                    mt={4}
                                    width="48%"
                                    boxShadow="md"
                                >
                                    Notes
                                </Button>
                            </NextLink>
                            <NextLink href="/newsletter" passHref>
                                <Button
                                    leftIcon="star"
                                    variant="outline"
                                    mt={4}
                                    width="48%"
                                    boxShadow="md"
                                    fontWeight="600"
                                >
                                    Ideas
                                </Button>
                            </NextLink>
                            <NextLink href="/newsletter" passHref>
                                <Button
                                    leftIcon="chat"
                                    variant="outline"
                                    mt={4}
                                    width="48%"
                                    boxShadow="md"
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
