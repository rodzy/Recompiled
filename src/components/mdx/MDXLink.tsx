import NextLink from "next/link";
import { Link, useColorMode } from "@chakra-ui/core";

const MDXLink: React.FC = (props: any) => {
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

export default MDXLink;
