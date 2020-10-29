import {
    Heading,
    Stack,
    Text,
    Flex,
    useColorMode,
    Link,
} from "@chakra-ui/core";
import { NextPage } from "next";
import Head from "next/head";
import { secondaryTextColor } from "../styles/colors";
import NextLink from "next/link";
import styled from "@emotion/styled";

const LearnLink = styled(Link)`
    text-decoration:underline;
    &:hover {
        color: rgba(25, 166, 67, 1);
        text-decoration:none;
    }
`;

const Index: NextPage = () => {
    const { colorMode } = useColorMode();

    return (
        <>
            <Head>
                <title>Recompiled — Isaac Rodríguez Digital Garden</title>
            </Head>
            <Stack
                as="main"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 3rem auto"
                maxWidth="900px"
            >
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="800px"
                >
                    <Heading
                        letterSpacing="tight"
                        mb={2}
                        as="h1"
                        fontSize={["5xl", "6xl"]}
                    >
                        Recompiled
                    </Heading>
                    <Heading
                        as="h2"
                        color={secondaryTextColor[colorMode]}
                        fontSize={["xl", "3xl"]}
                        pb={[3,6]}
                        pr={[0, "6rem"]}
                        lineHeight={["normal", "short"]}
                    >
                        A digital space for blog posts, notes and ideas about
                        programming and the modern web from Isaac Rodríguez
                        perspective.
                    </Heading>
                    <Heading as="h3" fontSize={["xl", "2xl"]}>
                        Who is Isaac Rodríguez?{" "}
                        <NextLink href="/about" passHref>
                            <LearnLink color={secondaryTextColor[colorMode]}>
                                About him
                            </LearnLink>
                        </NextLink>
                    </Heading>
                    <Text color={secondaryTextColor[colorMode]}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Obcaecati placeat, eius magni praesentium
                        dignissimos magnam eos pariatur molestias voluptas
                        suscipit iure ex reprehenderit, a consectetur nostrum
                        nihil accusantium aperiam numquam.
                    </Text>
                    <Text color={secondaryTextColor[colorMode]}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Obcaecati placeat, eius magni praesentium
                        dignissimos magnam eos pariatur molestias voluptas
                        suscipit iure ex reprehenderit, a consectetur nostrum
                        nihil accusantium aperiam numquam.
                    </Text>
                    <Text color={secondaryTextColor[colorMode]}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Obcaecati placeat, eius magni praesentium
                        dignissimos magnam eos pariatur molestias voluptas
                        suscipit iure ex reprehenderit, a consectetur nostrum
                        nihil accusantium aperiam numquam.
                    </Text>
                    <Text color={secondaryTextColor[colorMode]}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Obcaecati placeat, eius magni praesentium
                        dignissimos magnam eos pariatur molestias voluptas
                        suscipit iure ex reprehenderit, a consectetur nostrum
                        nihil accusantium aperiam numquam.
                    </Text>
                    <Text color={secondaryTextColor[colorMode]}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Obcaecati placeat, eius magni praesentium
                        dignissimos magnam eos pariatur molestias voluptas
                        suscipit iure ex reprehenderit, a consectetur nostrum
                        nihil accusantium aperiam numquam.
                    </Text>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                    mt={8}
                >
                    <Heading
                        letterSpacing="tight"
                        mb={4}
                        size="xl"
                        fontWeight={700}
                    >
                        Latest posts
                    </Heading>
                </Flex>
            </Stack>
        </>
    );
};

export default Index;
