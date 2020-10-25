import { Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <Flex align="center" mb={4} direction="column">
            <div>
                <NextLink href="/about" passHref>
                    <Link
                        fontSize="sm"
                        minWidth="100px"
                        mr={2}
                        title="About me"
                    >
                        about me ↗
                    </Link>
                </NextLink>
                <Link
                    href="mailto:irod2899@gmail.com"
                    title="Email"
                    isExternal
                    fontSize="sm"
                    minWidth="100px"
                    mr={2}
                >
                    email ↗
                </Link>
                <Link
                    fontSize="sm"
                    minWidth="100px"
                    mr={2}
                    href="https://github.com/rodzy"
                    title="GitHub"
                    isExternal
                >
                    github ↗
                </Link>
                <Link
                    fontSize="sm"
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
                        fontSize="sm"
                        minWidth="100px"
                        mr={2}
                        title="Newsletter"
                    >
                        newsletter ↗
                    </Link>
                </NextLink>
            </div>
        </Flex>
    );
};

export default Footer;
