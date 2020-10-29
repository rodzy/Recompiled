import { useColorMode, Divider } from "@chakra-ui/core";

const Hr: React.FC = () => {
    const { colorMode } = useColorMode();
    const borderColor = {
        light: "gray.200",
        dark: "gray.600",
    };

    return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

export default Hr;
