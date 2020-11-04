import {
    Heading,
    Stack,
    Text,
    Flex,
    useColorMode,
    Link,
    Button,
    Box,
} from "@chakra-ui/core";
import { NextPage } from "next";
import { secondaryTextColor } from "../styles/colors";
import NextLink from "next/link";
import styled from "@emotion/styled";
import ListItem from "../components/ListItem";
import { frontMatter as blogPosts } from "../pages/posts/*.mdx";
import { frontMatter as notesPosts } from "../pages/notes/*.mdx";
import { frontMatter as ideasPosts } from "../pages/ideas/*.mdx";
import MiniItem from "../components/MiniItem";
import Pilars from "../components/Pilars";
import CoreTri from "../components/CoreTri";
import Image from "next/image";

const LearnLink = styled(Link)`
    text-decoration: underline;
    &:hover {
        color: rgba(64, 158, 246, 0.7841);
        text-decoration: none;
    }
`;

const CustomSpan = styled(Text)`
    &:hover {
        color: rgba(25, 166, 67, 1);
    }
`;

const Index: NextPage = () => {
    const { colorMode } = useColorMode();

    return (
        <>
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
                    maxWidth="850px"
                >
                    <Heading
                        letterSpacing="tight"
                        mb={2}
                        as="h1"
                        fontSize={["3.2rem", "5xl", "7rem"]}
                    >
                        Recompiled
                    </Heading>
                    <Heading
                        as="p"
                        color={secondaryTextColor[colorMode]}
                        fontSize={["xl", "3xl"]}
                        pb={[3, 6]}
                        pr={[0, 0, "10rem"]}
                        lineHeight={["normal", "tall"]}
                    >
                        Isaac Rodríguez&apos;s digital garden composed by blog
                        posts, notes and ideas about programming and the modern
                        web from his perspective.
                    </Heading>
                </Flex>
                <Flex
                    as="section"
                    flexDirection={["column", "column", "row"]}
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    mb={8}
                >
                    <Box width={["100%", "100%", "50%"]}>
                        <Heading as="h2" fontSize={["xl", "2xl"]}>
                            Who is Isaac Rodríguez?{" "}
                        </Heading>
                        <Text
                            as="p"
                            my={2}
                            fontSize={["md", "xl"]}
                            color={secondaryTextColor[colorMode]}
                            textAlign={[
                                "initial",
                                "initial",
                                "initial",
                                "justify",
                            ]}
                        >
                            He's an engineer, designer, and frontend web
                            development enthusiast, focused on developing
                            creative and efficient software. He combines his
                            coding skills with his drive for great design and
                            accessibility to make sure his work doesn't go
                            unnoticed.
                        </Text>
                        <Text
                            as="p"
                            my={2}
                            fontSize={["md", "xl"]}
                            color={secondaryTextColor[colorMode]}
                            textAlign={[
                                "initial",
                                "initial",
                                "initial",
                                "justify",
                            ]}
                        >
                            He's a new web technologies enthusiast, fan of
                            geometrical shapes and abstract designs. You can
                            find him on{" "}
                            <LearnLink
                                href="https://github.com/rodzy"
                                isExternal
                            >
                                GitHub
                            </LearnLink> and{" "}
                            <LearnLink
                                href="https://twitter.com/rodzyrm"
                                isExternal
                            >
                                Twitter
                            </LearnLink>.{" "} 
                            Find more details in his about page
                        </Text>
                        <Flex justifyContent="flex-end">
                            <NextLink href="/about" passHref>
                                <Button
                                    rightIcon="arrow-forward"
                                    variant="outline"
                                    boxShadow="md"
                                >
                                    Learn more
                                </Button>
                            </NextLink>
                        </Flex>
                    </Box>
                    <Box pt={["1rem", 0]}>
                        <Image
                            src="/images/mirrored-by-rodzy.svg"
                            alt="mirrored-by-rodzy"
                            loading="lazy"
                            width={500}
                            height={500}
                            quality={100}
                        />
                    </Box>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    width="100%"
                    my={8}
                >
                    <Heading
                        letterSpacing="tight"
                        lineHeight={["1.25"]}
                        mb={2}
                        as="h2"
                        fontSize={["4xl", "5xl", "6xl"]}
                    >
                        Digital garden
                    </Heading>
                    <Heading
                        as="p"
                        color={secondaryTextColor[colorMode]}
                        fontSize={["xl", "3xl"]}
                        pb={[3, 6]}
                        pr={[0, 0, "10rem"]}
                        lineHeight={["normal", "tall"]}
                        textAlign="left"
                    >
                        Isaac Rodríguez cultivates this garden with his
                        experiences and knowledge about programming, web
                        development and design.
                    </Heading>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    width="100%"
                >
                    <Heading
                        as="h3"
                        letterSpacing="tight"
                        mb={2}
                        size="xl"
                        fontWeight={700}
                    >
                        Latest
                    </Heading>
                    <Text as="p" color={secondaryTextColor[colorMode]}>
                        A list of curated posts about web development, best
                        practices, and more detailed information about ongoing
                        personal projects or OSS community tendencies.
                    </Text>
                    <Flex flexDirection="column">
                        <Flex mt={4} flexDirection="column">
                            {blogPosts.map((item) => (
                                <ListItem
                                    key={item.pageTitle}
                                    frontMatter={item}
                                />
                            ))}
                        </Flex>
                    </Flex>
                    <Flex justifyContent="center" width="100%">
                        <NextLink href="/" passHref>
                            <Button
                                leftIcon="external-link"
                                variant="outline"
                                boxShadow="md"
                            >
                                Visit the blog
                            </Button>
                        </NextLink>
                    </Flex>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    width="100%"
                    mb={8}
                >
                    <Stack
                        flexDirection={["column", "column", "column", "row"]}
                        flexWrap="nowrap"
                        width="100%"
                        justifyContent="space-around"
                    >
                        <Flex flexDirection="column">
                            <Heading as="h3" mb={2}>
                                Notes
                            </Heading>
                            <Text
                                as="p"
                                color={secondaryTextColor[colorMode]}
                                width={["100%", "100%", "100%", "25rem"]}
                                pr={[0, 5]}
                            >
                                A collection of short keynotes, blockquotes and
                                snippets for any intresting topic or subject
                                related with web development.
                            </Text>
                            <Flex flexDirection="column" py={5}>
                                {notesPosts.map((note) => (
                                    <MiniItem
                                        key={note.pageTitle}
                                        frontMatter={note}
                                    />
                                ))}
                                <Flex justifyContent="flex-end">
                                    <NextLink href="/" passHref>
                                        <Button
                                            rightIcon="arrow-forward"
                                            variant="outline"
                                            boxShadow="md"
                                        >
                                            Read more notes
                                        </Button>
                                    </NextLink>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex flexDirection="column" pl={[0, 0, 3]}>
                            <Heading as="h3" mb={2}>
                                Ideas
                            </Heading>
                            <Text
                                as="p"
                                color={secondaryTextColor[colorMode]}
                                width={["100%", "100%", "100%", "25rem"]}
                                pr={[0, 5]}
                            >
                                Plain explainations of my general ideas and
                                thoughts about any projects, future goals and
                                Open Source software.
                            </Text>
                            <Flex flexDirection="column" py={5}>
                                {ideasPosts.map((idea) => (
                                    <MiniItem
                                        key={idea.pageTitle}
                                        frontMatter={idea}
                                    />
                                ))}
                                <Flex justifyContent="flex-end">
                                    <NextLink href="/" passHref>
                                        <Button
                                            rightIcon="arrow-forward"
                                            variant="outline"
                                            boxShadow="md"
                                        >
                                            Read more ideas
                                        </Button>
                                    </NextLink>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Stack>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    width="100%"
                    my={8}
                >
                    <Heading
                        letterSpacing="tight"
                        lineHeight={["1.25"]}
                        mb={2}
                        as="h2"
                        fontSize={["4xl", "5xl", "6xl"]}
                    >
                        Essentials
                    </Heading>
                    <Heading
                        as="p"
                        color={secondaryTextColor[colorMode]}
                        fontSize={["xl", "3xl"]}
                        pb={[3, 6]}
                        pr={[0, 0, "10rem"]}
                        lineHeight={["normal", "tall"]}
                        textAlign="left"
                    >
                        The bases of Recompiled are found around minimalism,
                        programming, typography and design.
                    </Heading>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                >
                    <CoreTri />
                    <Box textAlign="center">
                        <NextLink href="/" passHref>
                            <Link
                                fontStyle="italic"
                                color={secondaryTextColor[colorMode]}
                            >
                                Read:{" "}
                                <CustomSpan as="span">
                                    {" "}
                                    "The four elements formula"
                                </CustomSpan>
                            </Link>
                        </NextLink>
                    </Box>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    width="100%"
                    mt={["2rem", "4rem"]}
                    mb={8}
                >
                    <Heading
                        letterSpacing="tight"
                        mb={2}
                        as="h2"
                        fontSize={["4xl", "5xl", "6xl"]}
                    >
                        Typography
                    </Heading>
                    <Heading
                        as="p"
                        color={secondaryTextColor[colorMode]}
                        fontSize={["xl", "3xl"]}
                        pb={[3, 6]}
                        pr={[0, 0, "10rem"]}
                        lineHeight={["normal", "tall"]}
                        textAlign="left"
                    >
                        Recompiled is a digital garden focused on explaining
                        programming through great typography, minimalism and
                        digital art.
                    </Heading>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    my={8}
                >
                    <Pilars />
                    <Box pt={3} textAlign="center">
                        <NextLink href="/" passHref>
                            <Link
                                fontStyle="italic"
                                color={secondaryTextColor[colorMode]}
                            >
                                Read:{" "}
                                <CustomSpan as="span">
                                    {" "}
                                    "Why fonts are the deciding factor?"
                                </CustomSpan>
                            </Link>
                        </NextLink>
                    </Box>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    width="100%"
                    mb={8}
                >
                    <Heading
                        letterSpacing="tight"
                        mb={2}
                        as="h2"
                        fontSize={["4xl", "5xl", "6xl"]}
                    >
                        Art
                    </Heading>
                    <Heading
                        as="p"
                        color={secondaryTextColor[colorMode]}
                        fontSize={["xl", "3xl"]}
                        pb={[3, 6]}
                        pr={[0, 0, "10rem"]}
                        lineHeight={["normal", "tall"]}
                    >
                        Sometimes posts are less boring when the concepts are
                        explained in conjunction with visual representations.
                    </Heading>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    mb={8}
                >
                    <Text as="span">Content soon</Text>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    my={["6rem", "20rem"]}
                >
                    <Heading
                        letterSpacing="tight"
                        mb={2}
                        as="h3"
                        fontSize={["4xl", "5xl", "6xl"]}
                    >
                        What's next?
                    </Heading>
                </Flex>
            </Stack>
        </>
    );
};

export default Index;
