import { Stack } from "@chakra-ui/core";
import { NextPage } from "next";

const About: NextPage = () => {
    return (
        <Stack
            as="main"
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
            m="0 auto 3rem auto"
            maxWidth="900px"
        >
            <h1>About me goes here</h1>
        </Stack>
    );
};
export default About;
