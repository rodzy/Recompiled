import { Heading, Stack, Text, Flex, useColorMode } from "@chakra-ui/core";
import { NextPage } from "next";
import Head from "next/head";
import Container from "../components/layout/TheContainer";
import { secondaryTextColor } from '../styles/colors';

const Index: NextPage = () => {
    const { colorMode } = useColorMode();
    
    return (
        <>
            <Head>
                <title>Recompiled — Isaac Rodríguez Dev Journey</title>
            </Head>
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 3rem auto"
                    maxWidth="900px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                    >
                        <Heading
                            letterSpacing="tight"
                            mb={2}
                            as="h1"
                            size="2xl"
                        >
                            Hellllloooooo , from index.tsx
                        </Heading>
                        <Text color={secondaryTextColor[colorMode]}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Obcaecati placeat, eius magni praesentium
                            dignissimos magnam eos pariatur molestias voluptas
                            suscipit iure ex reprehenderit, a consectetur
                            nostrum nihil accusantium aperiam numquam.
                        </Text>
                        <Text color={secondaryTextColor[colorMode]}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Obcaecati placeat, eius magni praesentium
                            dignissimos magnam eos pariatur molestias voluptas
                            suscipit iure ex reprehenderit, a consectetur
                            nostrum nihil accusantium aperiam numquam.
                        </Text>
                        <Text color={secondaryTextColor[colorMode]}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Obcaecati placeat, eius magni praesentium
                            dignissimos magnam eos pariatur molestias voluptas
                            suscipit iure ex reprehenderit, a consectetur
                            nostrum nihil accusantium aperiam numquam.
                        </Text>
                        <Text color={secondaryTextColor[colorMode]}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Obcaecati placeat, eius magni praesentium
                            dignissimos magnam eos pariatur molestias voluptas
                            suscipit iure ex reprehenderit, a consectetur
                            nostrum nihil accusantium aperiam numquam.
                        </Text>
                        <Text color={secondaryTextColor[colorMode]}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Obcaecati placeat, eius magni praesentium
                            dignissimos magnam eos pariatur molestias voluptas
                            suscipit iure ex reprehenderit, a consectetur
                            nostrum nihil accusantium aperiam numquam.
                        </Text>
                        <Text color={secondaryTextColor[colorMode]}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Obcaecati placeat, eius magni praesentium
                            dignissimos magnam eos pariatur molestias voluptas
                            suscipit iure ex reprehenderit, a consectetur
                            nostrum nihil accusantium aperiam numquam.
                        </Text>
                        <pre>
                            <code>
                                const hi="Hi"
                            </code>
                        </pre>
                    </Flex>
                    <Flex
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
            </Container>
        </>
    );
};

export default Index;
