import { useState, useContext } from 'react';
//import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { api } from '../../../../shared/services/ApiService';
import styles from "./index.module.css";
//import { ImgUpContext } from '../../context/ImgUpContext';

function CreatePost() {
    const navigate = useNavigate();
    const { loggedUser } = useContext(UserContext);
    //const { file, imagePreview, base64, name, onChange, _handleReaderLoaded, onFileSubmit, photoUpload, remove } = useContext(ImgUpContext);
    const [tagInput, setTagInput] = useState(''); // Para controlar o campo de entrada de tags
    const [post, setPost] = useState({
        user: loggedUser,
        tags: [] as string[],
        title: "",
        body: "",
        img_filename: null as null | string,
        img_bytes: null as null | any
    });
    
    const handleChange = (event) => {
        const { name, value} = event.target;
        setPost({
            ...post,
            [name]: value,
        });
        //console.log(name + ': ' + value);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
        
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
        
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    const uploadImage = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);

        setPost({
            ...post,
            img_filename: file.name,
            img_bytes: base64.split("base64,")[1]
        });
        console.log(file.name)
    }

    const removeFile = async () => {
        setPost({
            ...post,
            img_filename: null,
            img_bytes: null
        });
    }

    const handleTagInputChange = (event) => {
        setTagInput(event.target.value);
    };
    
    const addTag = () => {
        if (tagInput.trim() !== '' && !post.tags.includes(tagInput.trim())) {
            setPost({
                ...post,
                tags: [...post.tags, tagInput.trim()],
            });
        }
        setTagInput('');
    };

    const removeTag = (deadTag) => {
        const updatedTags = post.tags.filter((tag) => tag !== deadTag);
        setPost({
            ...post,
            tags: updatedTags,
        });
    };

    const handleSubmit = async () => {
        if (post.body === '' || post.title === '') {
            alert('Para realizar uma postagem, os campos de título e corpo precisam ser preenchidos.');
            return; // Impedir o envio se o corpo estiver em branco
        }
        
        const response = await api.post(location.pathname, post);
        console.log(response.data);

        setPost({
            user: loggedUser,
            tags: [],
            title: "",
            body: "",
            img_filename: null,
            img_bytes: null
        });

        navigate('/post/' + response.data.data.post_id); // abre tela do post criado
    };   

    const onSubmit = async (event) => {
        event.preventDefault();
        handleSubmit();
    };

    return (
        <section className={styles.container}>
            <div className={styles.centralize}>
                <div className={styles.user}>
                    <span>user#</span>{loggedUser}
                </div>
                <form onSubmit={onSubmit}>
                    <div className="title">
                        <label>
                            Título:
                            <input
                                data-cy="input-title"
                                type="text"
                                name="title"
                                value={post.title}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="tags">
                        <label>
                            Tags:
                            <input
                                data-cy="input-tags"
                                type="text"
                                value={tagInput}
                                onChange={handleTagInputChange}
                            />
                            <button data-cy="button-add-tag" type="button" onClick={addTag}>
                                Adicionar
                            </button>
                        </label>
                    </div>
                    {post.tags.length > 0 && (
                        <div>
                            <ul>
                                {post.tags.map((tag, index) => (
                                    <div key={index}>
                                        <button
                                            type="button"
                                            onClick={() => removeTag(tag)}
                                            >
                                            X 
                                        </button>
                                        {tag}
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="body">
                        <label>
                            Corpo:
                            <textarea
                                data-cy="input-body"
                                name="body"
                                value={post.body}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="image">
                        <label>
                        Imagem:
                        <input
                            data-cy="input-image"
                            type="file"
                            accept=".jpef, .png, .jpg"
                            onChange={uploadImage}
                            />
                        </label>
                        {post.img_bytes != null &&
                            <button type="button" onClick={removeFile} >Remover</button>
                        }
                    </div>
                    <button data-cy="button-create-post" type="submit">Postar</button>
                </form>
            </div>
        </section>
    );
}

export default CreatePost;