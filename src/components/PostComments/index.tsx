import { FormEvent, useState } from 'react';
import Comment from '../../models/Comment';
import { Postcom, Postcon, Postbutton, Postform, Posttextarea } from './styles';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <ul>
                {comments.map(({ comment, id }) => (
                    <Postcom key={id}>
                        <Postcon>
                            {comment}
                        </Postcon>
                    </Postcom>
                ))}
            </ul>
            <Postform onSubmit={handleAddComment}>
                <Posttextarea value={tempComment} onChange={e => setTempComment(e.target.value)} required />
                <Postbutton type="submit">
                    Comentar
                </Postbutton>
            </Postform>
        </div>
    );
}

export default Post;