import { Link, useColorMode, Box, Flex, Heading, Text } from "@chakra-ui/core";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { borderColors, secondaryTextColor } from "../styles/colors";

interface Props {
    frontMatter: FrontMatter;
}

const CustomBox = styled(Box)`
    transition: 0.2s ease-in-out;
    &:hover {
        border-top: 3px solid rgba(64, 158, 246, 0.7841);
    }
`;

const MiniItem: React.FC<Props> = ({ frontMatter }) => {
    const { colorMode } = useColorMode();
    const slug = frontMatter.__resourcePath.replace(".mdx", "");

    return (
        <NextLink href={slug} passHref>
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
                        <Heading size="md" as="h4" mb={2} fontWeight="medium">
                            {frontMatter.pageTitle}
                        </Heading>
                    </Flex>
                    <Text color={secondaryTextColor[colorMode]}>
                        {frontMatter.pageDescription}
                    </Text>
                </CustomBox>
            </Link>
        </NextLink>
    );
};

export default MiniItem;
