import { Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <Flex align="center" mb={4} direction="column">
            <Flex align="center" wrap="wrap">
                <NextLink href="/about" passHref>
                    <Link
                        fontSize="md"
                        minWidth="100px"
                        mr={2}
                        title="About me"
                    >
                        about ↗
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
                    twitter ↗
                </Link>
                <Link
                    fontSize="md"
                    minWidth="100px"
                    mr={2}
                    href="https://github.com/rodzy"
                    title="GitHub"
                    isExternal
                >
                    github ↗
                </Link>
                <Link
                    fontSize="md"
                    minWidth="100px"
                    isExternal
                    href="https://www.linkedin.com/in/isaac-rodriguez-m/"
                    mr={2}
                    title="LinkedIn"
                >
                    linkedin ↗
                </Link>
                <NextLink href="/newsletter" passHref>
                    <Link
                        fontSize="md"
                        minWidth="100px"
                        mr={2}
                        title="Newsletter"
                    >
                        newsletter ↗
                    </Link>
                </NextLink>
            </Flex>
        </Flex>
    );
};

export default Footer;
