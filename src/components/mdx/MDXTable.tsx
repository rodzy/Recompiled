import { Box, useColorMode } from "@chakra-ui/core";
export const Table: React.FC = (props: any) => (
    <Box overflowX="scroll" w="full">
        <Box as="table" textAlign="left" mt="32px" w="full" {...props} />
    </Box>
);

export const THead: React.FC = (props: any) => {
    const { colorMode } = useColorMode();
    const bg = {
        light: "gray.50",
        dark: "whiteAlpha.100",
    };

    return (
        <Box
            as="th"
            bg={bg[colorMode]}
            fontWeight="semibold"
            p={2}
            fontSize="sm"
            {...props}
        />
    );
};

export const TData: React.FC = (props: any) => {
    return (
        <Box
            as="td"
            p={2}
            borderTopWidth="1px"
            borderColor="inherit"
            fontSize="sm"
            whiteSpace="normal"
            {...props}
        />
    );
};
