import { Link } from "@chakra-ui/core";
import NextLink from "next/link";

interface Props {
    frontMatter: FrontMatter;
}

const ListItem: React.FC<Props> = ({ frontMatter }) => {
    const slug = frontMatter.__resourcePath
        .replace("post/", "")
        .replace(".mdx", "");
    return (
        <NextLink href={`${slug}`} passHref>
            <Link>{frontMatter.pageTitle}</Link>
        </NextLink>
    );
};

export default ListItem;
