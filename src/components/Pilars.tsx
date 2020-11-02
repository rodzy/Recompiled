import { Box, Flex, Text, useColorMode } from "@chakra-ui/core";

const Pilars: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
        <Flex
            flexDirection={["column", "column", "row"]}
            width="100%"
            cursor="none"
            boxShadow="md"
            userSelect="none"
        >
            <Box
                width={["100%", "100%", "50%"]}
                backgroundColor={colorMode === "dark" ? "#fff" : "#000"}
                textAlign="center"
                borderTopLeftRadius="0.4rem"
                borderTopRightRadius={["0.4rem", "0.4rem", 0, 0]}
                borderBottomLeftRadius={[0, 0, "0.4rem", "0.4rem"]}
            >
                <Text
                    fontSize={["10rem", "20rem"]}
                    color={colorMode === "light" ? "#fff" : "#000"}
                    fontFamily="Abril Fatface"
                    fontWeight="400"
                >
                    A
                </Text>
            </Box>
            <Box
                width={["100%", "100%", "50%"]}
                backgroundColor={colorMode === "light" ? "#fff" : "#000"}
                textAlign="center"
                borderTopRightRadius={[0, 0, "0.4rem", "0.4rem"]}
                borderBottomRightRadius="0.4rem"
                borderBottomLeftRadius={["0.4rem", "0.4rem", 0, 0]}
            >
                <Text
                    fontSize={["10rem", "20rem"]}
                    color={colorMode === "dark" ? "#fff" : "#000"}
                    fontFamily="Fredericka the Great, cursive"
                    fontWeight="400"
                >
                    A
                </Text>
            </Box>
        </Flex>
    );
};

export default Pilars;
