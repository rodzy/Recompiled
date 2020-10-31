import { Post } from '../types/post';
import NextLink from 'next/link';
interface Props{
    postData:Post
}

const ListItem: React.FC<Props> = ({ postData }) => {
    return (
        <NextLink href="/posts/[id]" as={`/posts/${postData.id}`}>
            
        </NextLink>
    )
}

export default ListItem;