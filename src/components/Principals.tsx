import { Flex, Box, Text, useColorMode } from "@chakra-ui/core";

const Principals: React.FC = () => {
    const { colorMode } = useColorMode();

    return (
        <Flex
            width="100%"
            height="50vh"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                width="20rem"
                height="20rem"
                position="absolute"
                mr="10rem"
                mb="10rem"
                backgroundColor={colorMode === "dark" ? "#fff" : "#000"}
            >
                <Text
                    as="p"
                    fontSize="2rem"
                    color={colorMode === "dark" ? "#000" : "#fff"}
                    fontWeight="700"
                    pr={3}
                    textAlign="right"
                >
                    Development
                </Text>
            </Box>
            <Box
                width="20rem"
                height="20rem"
                position="absolute"
                ml="10rem"
                mt="10rem"
                zIndex={10}
                backgroundColor={
                    colorMode === "dark" ? " rgba(19,20,21,0.45)" : "#fff"
                }
            >
                <Text
                    as="p"
                    fontSize="2rem"
                    color={colorMode === "dark" ? "#fff" : "#000"}
                    fontWeight="700"
                    pl={3}
                    pt={8}
                    textAlign="left"
                >
                    Design
                </Text>
            </Box>
            <Box
                width="20rem"
                height="20rem"
                position="absolute"
                ml="10rem"
                mt="10rem"
                zIndex={9}
                backgroundColor={colorMode === "dark" ? " #000" : "#fff"}
            >
                <Text
                    as="span"
                    fontSize="2rem"
                    color={colorMode === "dark" ? "#fff" : "#000"}
                    fontWeight="500"
                    pl={3}
                >
                    Design
                </Text>
            </Box>
        </Flex>
    );
};

export default Principals;
