import { Stack } from "@chakra-ui/core";
interface Props {
    children: React.ReactNode;
    frontMatter: FrontMatter;
}

const PostWrapper: React.FC<Props> = ({ children, frontMatter }) => {
    const slug = frontMatter.__resourcePath
        .replace("posts/", "")
        .replace(".mdx", "");
    console.log(slug);
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

export default PostWrapper;
