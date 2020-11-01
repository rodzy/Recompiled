import { Box, Link, Flex, Heading, Text, useColorMode } from "@chakra-ui/core";
import NextLink from "next/link";
import { secondaryTextColor, borderColors } from "../styles/colors";
import Date from "./Date";
import styled from "@emotion/styled";

interface Props {
    frontMatter: FrontMatter;
}

const CustomBox = styled(Box)`
    transition: 0.2s ease-in-out;
    &:hover {
        border-top: 3px solid rgba(25, 166, 67, 1);
    }
`;

const ListItem: React.FC<Props> = ({ frontMatter }) => {
    const { colorMode } = useColorMode();
    const slug = frontMatter.__resourcePath.replace(".mdx", "");
    return (
        <NextLink href={`${slug}`} passHref>
            <Link
                _hover={{
                    textDecoration: "none",
                    outline: "none",
                }}
                _focus={{
                    outline: "none",
                }}
            >
                <CustomBox
                    mb={8}
                    p={5}
                    display="block"
                    width="100%"
                    border="1px solid"
                    borderColor={borderColors[colorMode]}
                    borderRadius="0.3rem"
                    boxShadow="md"
                >
                    <Flex
                        width="100%"
                        align="flex-start"
                        justifyContent="space-between"
                        flexDirection={["column", "row"]}
                    >
                        <Heading size="md" as="h3" mb={2} fontWeight="medium">
                            {frontMatter.pageTitle}
                        </Heading>
                        <Text
                            color="gray.500"
                            minWidth="105px"
                            textAlign={["left", "right"]}
                            mb={[4, 0]}
                        >
                            <Date dateString={frontMatter.postDate} />
                        </Text>
                    </Flex>
                    <Text color={secondaryTextColor[colorMode]}>
                        {frontMatter.pageDescription}
                    </Text>
                </CustomBox>
            </Link>
        </NextLink>
    );
};

export default ListItem;
