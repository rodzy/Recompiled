import {
    Box,
    Link,
    Flex,
    Heading,
    Text,
    useColorMode,
    Icon,
} from "@chakra-ui/core";
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
                        flexDirection={["column", "column", "column", "row"]}
                    >
                        <Heading size="md" as="h4" mb={2} fontWeight="medium">
                            {frontMatter.pageTitle}
                        </Heading>
                        <Flex flexDirection="column">
                            <Text
                                color={secondaryTextColor[colorMode]}
                                minWidth="105px"
                                textAlign={["left", "right"]}
                                mb={[0, 0]}
                            >
                                <Icon name="calendar" mb={1} mr={2} />
                                <Date dateString={frontMatter.postDate} />
                            </Text>
                            <Text
                                color={secondaryTextColor[colorMode]}
                                minWidth="105px"
                                textAlign="left"
                                mb={[3, 3, 3, 0]}
                            >
                                <Icon name="time" mb={1} mr={2} />
                                {frontMatter.eta} read
                            </Text>
                        </Flex>
                    </Flex>
                    <Text
                        color={secondaryTextColor[colorMode]}
                        pr={[0, "10rem"]}
                    >
                        {frontMatter.pageDescription}
                    </Text>
                </CustomBox>
            </Link>
        </NextLink>
    );
};

export default ListItem;
