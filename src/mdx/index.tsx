import { Stack } from "@chakra-ui/core";

interface Props {
    children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
    return (
        <Stack
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
            m="0 auto 3rem auto"
            maxWidth="850px"
        >
            {children}
        </Stack>
    );
};

export default Wrapper;
