// import fs from "fs";
// import path from "path";
import {
    Heading,
    Stack,
    Text,
    Flex,
    useColorMode,
    Link,
    Skeleton,
} from "@chakra-ui/core";
import { NextPage } from "next";
import { secondaryTextColor } from "../styles/colors";
import NextLink from "next/link";
import styled from "@emotion/styled";
import ListItem from "../components/ListItem";
import { frontMatter as blogPosts } from "../pages/posts/**/*.mdx";

interface Props {
    fileName: string;
}

const LearnLink = styled(Link)`
    text-decoration: underline;
    &:hover {
        color: rgba(25, 166, 67, 1);
        text-decoration: none;
    }
`;

const Index: NextPage<Props> = () => {
    const { colorMode } = useColorMode();

    console.log(blogPosts);
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
                        fontSize={["5xl", "6xl"]}
                    >
                        Recompiled
                    </Heading>
                    <Heading
                        as="h2"
                        color={secondaryTextColor[colorMode]}
                        fontSize={["xl", "3xl"]}
                        pb={[3, 6]}
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
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="800px"
                    mb={8}
                >
                    <Stack
                        flexDirection={["column", "row"]}
                        flexWrap="nowrap"
                        width="100%"
                        justifyContent="space-around"
                    >
                        <Flex flexDirection="column" pl={[0, 3]}>
                            <Heading as="h2">Notes</Heading>
                            <Text
                                as="p"
                                color={secondaryTextColor[colorMode]}
                                width={["100%", "25rem"]}
                                pr={[0, 5]}
                            >
                                A collection of short keynotes, blockquotes and
                                snippets for any intresting topic or subject
                                related with web development.
                            </Text>
                            <Flex flexDirection="column">
                                <Skeleton height="80px" my="10px"></Skeleton>
                            </Flex>
                        </Flex>
                        <Flex flexDirection="column" pl={[0, 3]}>
                            <Heading as="h2">Ideas</Heading>
                            <Text
                                as="p"
                                color={secondaryTextColor[colorMode]}
                                width={["100%", "25rem"]}
                                pr={[0, 5]}
                            >
                                A section to help explain my general ideas and
                                thoughts about any project or future goals.
                            </Text>
                            <Flex flexDirection="column">
                                <Skeleton
                                    height="80px"
                                    mt={["10px", "33.5px"]}
                                    mb="10px"
                                ></Skeleton>
                            </Flex>
                        </Flex>
                    </Stack>
                </Flex>
                <Flex
                    as="section"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="800px"
                >
                    <Heading
                        letterSpacing="tight"
                        mb={4}
                        size="xl"
                        fontWeight={700}
                    >
                        Latest posts
                    </Heading>
                    <Flex>
                        {blogPosts.map((item) => (
                            <ListItem
                                key={item.pageTitle}
                                frontMatter={item}
                            />
                        ))}
                    </Flex>
                </Flex>
            </Stack>
        </>
    );
};

// export async function getStaticProps({ params }: any) {
//     const postsDirectory = path.join(process.cwd(), "posts");
//     const mdxFiles = fs.readdirSync(postsDirectory);
//     const paths = mdxFiles.map((filename) => ({
//         slug: filename.replace(".mdx", ""),
//     }));

//     // const postsWithFrontmatter = mdxFiles.map((filename) => {
//     //     const postContent = fs
//     //         .readFileSync(path.join("posts", params.slug + ".mdx"))
//     //         .toString();

//     //     return {
//     //         slug: filename.replace(".mdx", ""),
//     //     };
//     // });

//     return {
//         props: {
//             posts: paths,
//         },
//     };
// }

export default Index;
