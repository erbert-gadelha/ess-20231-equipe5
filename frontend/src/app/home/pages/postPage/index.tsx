import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.css";
//import { UserContext } from "../../context/UserContext";
import { api } from '../../../../shared/services/ApiService';
import Comment from '../../components/Comment'
//import axios from "axios";
//import { toBase64 } from "../../../../shared/services/base64.js";

function PostPage() {
    //const { user, setUser, title, setTitle, tags, setTags, body, setBody, image, setImage, comments, setComments } = useContext(PostContext);
    const navigate = useNavigate();
    //const { loggedUser } = useContext(UserContext);
    const [user, setUser] = useState("");
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [img_name, setImgName] = useState(undefined);
    const [img_content, setImgContent] = useState(null);
    const [comments, setComments] = useState([{id: 0, user: "", body: ""}]);
    const { postId } = useParams();
    //console.log('postId: ' + postId) 

    function clck_new_comment(){
        navigate('/comments/' + postId + '/new_comment', {state: {
            og_user: user,
            og_body: body
        }});
    }

    useEffect(() => {
        const getPostInfo = async () => {
            try {
                const response = await api.get('post/' + postId);
                setUser(response.data.data.user);
                setTags(response.data.data.tags);
                setTitle(response.data.data.title);
                setBody(response.data.data.body);
                setImgName(response.data.data.image_name);
        
                
                setComments(response.data.data.comments);

                setTimeout(() => {
                    setImgContent(response.data.data.image_content);
                }, 100);

            } catch (error) {
                console.log('Erro: ' + error);
            }
        };

        getPostInfo();

    }, [postId]);

    return (
        <section className={styles.container}>
            <div className={styles.centralize}>
                <div className={styles.header}>
                    <div data-cy="post-user" className="user">
                        <p data-cy="post-author"> user#<b>{user}</b> </p>
                    </div>
                    <div data-cy="post-title" className="title">
                        <p> {title} </p>
                    </div>
                    <div data-cy="post-tags"className="tags">
                    <p> {tags} </p>
                    </div>
                </div>
                <div data-cy="post-body"className="PostBody">
                    <div className="body">
                    <p> {body} </p>
                    </div>
                    {img_name != null && (
                            <img data-cy="post-image" className={styles.imagemAnexa} src={`data:image/png;base64,${img_content}`} />
                    )}

                </div>
                <button data-cy="create-comment" className={styles.commentButton} onClick={clck_new_comment}>
                        COMENTAR
                </button>
                <div data-cy="post-comments" id="comments" className={styles.comments} style={{width:"100%"}}>
                {comments.map((comment) => (
                    <div data-cy="item-comment" className={styles.commentary} key={comment.id}>
                        <Comment
                            user={comment.user}
                            text={comment.body}
                        />
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}

export default PostPage;