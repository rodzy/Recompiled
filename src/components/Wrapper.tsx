import { Stack } from "@chakra-ui/core";

interface Props {
    children: React.ReactNode;
    as: React.ElementType;
}

const Wrapper: React.FC<Props> = ({ children, as }) => {
    return (
        <Stack
            as={as}
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
            m="0 auto 3rem auto"
            maxWidth="900px"
        >
            {children}
        </Stack>
    );
};

export default Wrapper;
