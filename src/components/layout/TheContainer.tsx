import { Flex, useColorMode } from "@chakra-ui/core";
import NavBar from "./TheNavBar";
import Footer from "./TheFooter";
import { bg, pText } from "../../styles/colors";

interface Props {
    children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
    const { colorMode } = useColorMode();

    return (
        <>
            <NavBar />
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bg[colorMode]}
                color={pText[colorMode]}
                px={8}
            >
                {children}
                <Footer />
            </Flex>
        </>
    );
};

export default Container;
