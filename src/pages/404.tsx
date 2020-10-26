import {
    Box,
    Stack,
    Text,
    Heading,
    Flex,
    Button,
    useColorMode,
} from "@chakra-ui/core";
import { NextPage } from "next";
import NextLink from "next/link";
import Container from "../components/layout/TheContainer";
import { secondaryTextColor, miscTextColor } from "../styles/colors";

const NotFound: NextPage = () => {
    const { colorMode } = useColorMode();

    return (
        <Container>
            <Stack
                as="main"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="5rem auto 3rem auto"
                maxWidth="900px"
            >
                <Box>
                    <Heading as="h1" fontStyle="bold">
                        Sad news! This page does not exist
                    </Heading>
                    <Text
                        as="p"
                        color={miscTextColor[colorMode]}
                        fontWeight="600"
                    >
                        Error 404: Not found
                    </Text>
                </Box>
                <Box>
                    <Text as="p" fontStyle="italic">
                        "But you can always go back in time, like nothing
                        happened. Stay safe out there"
                    </Text>
                    <Text as="p" color={secondaryTextColor[colorMode]}>
                        - Isaac Rodríguez
                    </Text>
                </Box>
                <Flex
                    direction="column"
                    align="center"
                    justifyContent="center"
                    m="0 auto 3rem auto"
                    maxWidth="400px"
                >
                    <div>
                        <NextLink href="/" passHref>
                            <Button as="a" variant="outline" mb={3} w="100%">
                                Go back to the home page
                            </Button>
                        </NextLink>
                        <NextLink href="/about" passHref>
                            <Button as="a" variant="outline" mb={3} w="100%">
                                Go back to the about page
                            </Button>
                        </NextLink>
                        <NextLink href="/newsletter" passHref>
                            <Button as="a" variant="outline" mb={3} w="100%">
                                Subscribe to the newsletter
                            </Button>
                        </NextLink>
                    </div>
                </Flex>
            </Stack>
        </Container>
    );
};
export default NotFound;
