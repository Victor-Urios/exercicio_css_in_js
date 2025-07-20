import PostComments from '../PostComments';
import { ReactNode } from 'react';
import { Posti, Posttext, Postdiv } from './styles';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <Postdiv>
        <Posti src={imageUrl} />
        <Posttext> {children} </Posttext>
        <PostComments />
    </Postdiv>
);

export default Post;