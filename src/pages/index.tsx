import {
    Heading,
    Stack,
    Text,
    Flex,
    useColorMode,
    Link,
    Button,
    Box,
    Divider,
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
import NextImage from "next/image";

const LearnLink = styled(Link)`
    text-decoration: underline;
    &:hover {
        color: rgba(64, 158, 246, 0.7841);
        text-decoration: none;
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
                maxWidth="1000px"
            >
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="900px"
                >
                    <Heading
                        letterSpacing="tight"
                        as="h1"
                        fontSize={["3.2rem", "5xl", "6rem"]}
                        lineHeight={1.25}
                        mb={2}
                    >
                        Hello.
                        <br />
                        I'm Isaac Rodríguez.
                    </Heading>
                    <Heading
                        as="p"
                        color={secondaryTextColor[colorMode]}
                        fontSize={["xl", "3xl"]}
                        pb={[3, 0]}
                        lineHeight={["normal", "tall"]}
                    >
                        Frontend engineer and designer.
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
                            creative and efficient software combining his coding
                            skills with his drive for great design and
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
                            He's a fan of polyhedras, geometrical shapes and
                            abstract designs. You can find him on{" "}
                            <LearnLink
                                href="https://github.com/rodzy"
                                isExternal
                            >
                                GitHub
                            </LearnLink>
                            ,{" "}
                            <LearnLink
                                href="https://twitter.com/rodzyrm"
                                isExternal
                            >
                                Twitter
                            </LearnLink>{" "}
                            or find more details on his about page
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
                        <NextImage
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
                    mb={8}
                >
                    <Flex>
                        <Heading
                            letterSpacing="tight"
                            lineHeight={["1"]}
                            my={8}
                            as="h2"
                            fontSize={["4xl", "5xl", "6xl"]}
                        >
                            Digital <br />
                            garden
                        </Heading>
                        <NextImage
                            src="/images/Digital-growth-by-rodzy.svg"
                            alt="Digital growth by rodzy"
                            quality={100}
                            loading="lazy"
                            width={300}
                            height={300}
                        />
                    </Flex>
                    <Flex
                        width="100%"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Heading
                            as="p"
                            color={secondaryTextColor[colorMode]}
                            fontSize={["xl", "3xl"]}
                            pb={[3, 6]}
                            pr={[0, 0, "2rem"]}
                            lineHeight={["normal", "tall"]}
                            textAlign="left"
                        >
                            Isaac Rodríguez cultivates this garden with his
                            experiences and knowledge about programming, web
                            development and design.
                        </Heading>
                    </Flex>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    width="100%"
                >
                    <Box width="100%">
                        <Heading
                            as="h3"
                            letterSpacing="tight"
                            lineHeight={["1"]}
                            fontSize={["4xl", "5xl", "5xl"]}
                        >
                            Latest
                        </Heading>
                        <Divider />
                    </Box>
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
                    <Box width="100%">
                        <Heading
                            as="h3"
                            letterSpacing="tight"
                            lineHeight={["1"]}
                            fontSize={["4xl", "5xl", "5xl"]}
                        >
                            Popular
                        </Heading>
                        <Divider pt={2} />
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
                        lineHeight={["1"]}
                        mb={[2, 6]}
                        as="h4"
                        fontSize={["3xl", "4xl", "4xl"]}
                    >
                        The four
                        <br /> elements
                    </Heading>
                    <Heading
                        as="p"
                        color={secondaryTextColor[colorMode]}
                        fontSize={["lg", "xl", "2xl"]}
                        pb={[3, 6]}
                        pr={[0, 0, "10rem"]}
                        lineHeight={["normal", "tall"]}
                        textAlign="left"
                    >
                        The bases of Recompiled are found around minimalism,
                        programming, typography and abstract design.
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
                                Read: "The four elements formula"
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
                        mb={[2, 6]}
                        as="h4"
                        fontSize={["3xl", "4xl", "4xl"]}
                        lineHeight="1"
                    >
                        Polygonal <br />
                        acceptance
                    </Heading>
                    <Heading
                        as="p"
                        color={secondaryTextColor[colorMode]}
                        fontSize={["lg", "xl", "2xl"]}
                        pb={[3, 6]}
                        pr={[0, 0, "10rem"]}
                        lineHeight={["normal", "tall"]}
                    >
                        Polygons are fun, there are endless combinations and
                        shapes that can be formed and added to meaning. Usign
                        just polygons for design is weird at first until...
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
                    <NextImage
                        src="/images/Triangle-by-rodzy.svg"
                        alt="Triangle by Rodzy"
                        width={600}
                        height={600}
                        quality={100}
                        loading="lazy"
                    />
                    <Box pt={3} textAlign="center">
                        <NextLink href="/" passHref>
                            <Link
                                fontStyle="italic"
                                color={secondaryTextColor[colorMode]}
                            >
                                Read: "Polygonal acceptance in abstract design"
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
                        mb={[2, 6]}
                        lineHeight="1.2"
                        as="h4"
                        fontSize={["3xl", "4xl", "4xl"]}
                    >
                        Typography & <br />
                        font families
                    </Heading>
                    <Heading
                        as="p"
                        color={secondaryTextColor[colorMode]}
                        fontSize={["lg", "xl", "2xl"]}
                        pb={[3, 6]}
                        pr={[0, 0, "10rem"]}
                        lineHeight={["normal", "tall"]}
                        textAlign="left"
                    >
                        Font styles have been around physically for a long time,
                        when digitized they are the essence of any web
                        experience and there is a lot behind them.
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
                                Read: "Why fonts are the deciding factor?"
                            </Link>
                        </NextLink>
                    </Box>
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
                        as="h5"
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
