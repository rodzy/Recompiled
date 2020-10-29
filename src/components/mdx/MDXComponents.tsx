import { Box, Code, Heading, Kbd, Text } from "@chakra-ui/core";
import Hr from "./MDXhr";
import { Table, THead, TData } from "./MDXTable";
import MDXLink from "./MDXLink";
import HeadingPoint from "./MDXHeaderPoint";
import PointerQuote from "./MDXPointerQuote";

const MDXComponents = {
    h1: (props: any) => <Heading as="h1" size="xl" my={4} {...props} />,
    h2: (props: any) => (
        <HeadingPoint as="h2" fontWeight="bold" size="lg" {...props} />
    ),
    h3: (props: any) => (
        <HeadingPoint as="h3" size="md" fontWeight="bold" {...props} />
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
    a: MDXLink,
    p: (props: any) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
    ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
    ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
    li: (props: any) => <Box as="li" pb={1} {...props} />,
    blockquote: PointerQuote,
};

export default MDXComponents;
