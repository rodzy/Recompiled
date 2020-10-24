import { Stack } from "@chakra-ui/core";
import { NextPage } from "next";
import Container from "../components/layout/TheContainer";

const Newsletter: NextPage = () => {
    return (
        <Container>
            <Stack as="main">
                <h1>Newsletter goes here</h1>
            </Stack>
        </Container>
    );
};
export default Newsletter;
