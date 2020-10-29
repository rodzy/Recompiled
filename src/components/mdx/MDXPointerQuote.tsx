import { Callout, useColorMode } from "@chakra-ui/core";
import React from "react";

const PointerQuote: React.FC = (props: any) => {
    const { colorMode } = useColorMode();
    const bgColor = {
        light: "green.50",
        dark: "rgb(13 0 212 / 8%)",
    };

    return (
        <Callout
            mt={4}
            w="98%"
            bg={bgColor[colorMode]}
            variant="left-accent"
            status="info"
            borderColor={"#673ab7"}
            css={{
                "> *:first-of-type": {
                    marginTop: 0,
                    marginLeft: 8,
                },
            }}
            {...props}
        />
    );
};

export default PointerQuote;
