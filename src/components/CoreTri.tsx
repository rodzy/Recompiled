import { Box } from "@chakra-ui/core";

const CoreTri: React.FC = () => {
    return (
        <Box width="100%" mb="10rem" display="flex" justifyContent="center">
            <Box
                pos="absolute"
                width={0}
                height={0}
                borderTop={[
                    "200px solid rgba(19,20,21,0.45)",
                    "200px solid rgba(19,20,21,0.45)",
                    "300px solid rgba(19,20,21,0.45)",
                    "400px solid rgba(19,20,21,0.45)",
                    "500px solid rgba(19,20,21,0.45)",
                ]}
                borderLeft={[
                    "200px solid transparent",
                    "200px solid transparent",
                    "300px solid transparent",
                    "400px solid transparent",
                    "500px solid transparent",
                ]}
                zIndex={1}
                boxShadow="md"
            ></Box>
            <Box
                pos="absolute"
                width={0}
                height={0}
                borderTop={[
                    "200px solid white",
                    "200px solid white",
                    "300px solid white",
                    "400px solid white",
                    "500px solid white",
                ]}
                borderRight={[
                    "200px solid transparent",
                    "200px solid transparent",
                    "300px solid transparent",
                    "400px solid transparent",
                    "500px solid transparent",
                ]}
                boxShadow="xl"
            ></Box>
            <Box
                pos="absolute"
                width={0}
                height={0}
                borderBottom={[
                    "200px solid #000",
                    "200px solid #000",
                    "300px solid #000",
                    "400px solid #000",
                    "500px solid #000",
                ]}
                borderLeft={[
                    "200px solid transparent",
                    "200px solid transparent",
                    "300px solid transparent",
                    "400px solid transparent",
                    "500px solid transparent",
                ]}
                boxShadow="md"
            ></Box>
        </Box>
    );
};

export default CoreTri;
