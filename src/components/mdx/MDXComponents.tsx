import {
    Box,
    Callout,
    Code,
    Heading,
    Kbd,
    Link,
    PseudoBox,
    Text,
    useColorMode,
} from "@chakra-ui/core";
import NextLink from "next/link";
import Hr from './MDXhr';
import { Table, THead, TData } from "./MDXTable";



const CustomLink = (props: any) => {
    const { colorMode } = useColorMode();
    const color = {
        light: "#008a1e",
        dark: "#48BB78",
    };

    const href = props.href;
    const isInternalLink =
        href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternalLink) {
        return (
            <NextLink href={href} passHref>
                <Link color={color[colorMode]} {...props} />
            </NextLink>
        );
    }

    return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props: any) => {
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

const DocsHeading = (props: any) => {
    return (
        <Heading
            css={{
                scrollMarginTop: "100px",
                scrollSnapMargin: "100px",
                "&[id]": {
                    pointerEvents: "none",
                },
                "&[id]:before": {
                    display: "block",
                    height: " 6rem",
                    marginTop: "-6rem",
                    visibility: "hidden",
                    content: `""`,
                },
                "&[id]:hover a": { opacity: 1 },
            }}
            {...props}
            mb="1em"
            mt="2em"
        >
            <Box pointerEvents="auto">
                {props.children}
                {props.id && (
                    <PseudoBox
                        aria-label="anchor"
                        as="a"
                        color="blue.500"
                        fontWeight="normal"
                        outline="none"
                        _focus={{
                            opacity: 1,
                            boxShadow: "outline",
                        }}
                        opacity={0}
                        ml="0.375rem"
                    >
                        #
                    </PseudoBox>
                )}
            </Box>
        </Heading>
    );
};



const MDXComponents = {
    h1: (props: any) => <Heading as="h1" size="xl" my={4} {...props} />,
    h2: (props: any) => (
        <DocsHeading as="h2" fontWeight="bold" size="lg" {...props} />
    ),
    h3: (props: any) => (
        <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />
    ),

    inlineCode: (props: any) => (
        <Code variantColor="green" fontSize="0.84em" {...props} />
    ),
    kbd: Kbd,
    br: (props: any) => <Box height="24px" {...props} />,
    hr: Hr,
    table: Table,
    th: THead,
    td: TData,
    a: CustomLink,
    p: (props: any) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
    ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
    ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
    li: (props: any) => <Box as="li" pb={1} {...props} />,
    blockquote: Quote,
};

export { CustomLink };
export default MDXComponents;
