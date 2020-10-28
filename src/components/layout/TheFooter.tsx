import { Box, Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";

const Footer: React.FC = () => {
    const date = new Date();

    return (
        <Flex align="center" justifyContent="center" mb={4} direction="column">
            <Flex align="center" wrap="wrap" justifyContent="center">
                <NextLink href="/about" passHref>
                    <Link
                        fontSize="md"
                        minWidth="100px"
                        mr={2}
                        title="About me"
                    >
                        About ↗
                    </Link>
                </NextLink>
                <Link
                    href="https://twitter.com/rodzyrm"
                    title="Twitter"
                    isExternal
                    fontSize="md"
                    minWidth="100px"
                    mr={2}
                >
                    Twitter ↗
                </Link>
                <Link
                    fontSize="md"
                    minWidth="100px"
                    mr={2}
                    href="https://github.com/rodzy"
                    title="GitHub"
                    isExternal
                >
                    Github ↗
                </Link>
                <NextLink href="/newsletter" passHref>
                    <Link
                        fontSize="md"
                        minWidth="100px"
                        mr={2}
                        title="Newsletter"
                    >
                        Newsletter ↗
                    </Link>
                </NextLink>
            </Flex>
            <Box pt={3} pr={8}>
                <p>&copy; {date.getFullYear()} - Isaac Rodríguez</p>
            </Box>
        </Flex>
    );
};

export default Footer;
