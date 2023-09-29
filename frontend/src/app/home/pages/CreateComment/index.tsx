import { useState, useContext, ChangeEvent, FormEvent } from 'react';
//import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { api } from '../../../../shared/services/ApiService';

function CreateComment() {
    const navigate = useNavigate();
    const { loggedUser } = useContext(UserContext);
    const [comment, setComment] = useState({
        user: loggedUser,
        body: ""
    });
    const { postId } = useParams();

    const location = useLocation();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setComment({
            user:loggedUser, 
            body: event.target.value
        });
    };

    const handleSubmit = async () => {
        if (comment.body === '') {
            alert('Preencha o corpo do comentário.');
            return; // Impedir o envio se o corpo estiver em branco
        }
        
        const response = await api.post(location.pathname, comment);
        console.log(response.data);

        setComment({
            user: loggedUser,
            body: ""
        });

        navigate('/post/' + postId);
    };   

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        handleSubmit();
    };

    return (
        <div className="Page">
            <div className="OriginalPostInfo">
                <div className="user">
                    <p>{location.state.og_user}</p>
                </div>
                <p>{location.state.og_body}</p>
            </div>
            <div className="CommentHeader">
                <div className="user">
                    {loggedUser}
                </div>
            </div>
            <div className="CommentBody">
                <form onSubmit={onSubmit}>
                    <p>Comentário:</p>
                    <label>
                        <input
                            data-cy="input-comment-body"
                            type="text"
                            value={comment.body}
                            onChange={handleChange}
                        />
                    </label>
                    <button data-cy="button-create-comment" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default CreateComment;
