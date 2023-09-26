import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchResult = ({post_id}) => {
  
  const [post, setPost] = useState({title:null, body:null, user:null})
  
  useEffect(() => {    
      axios.get(`http://127.0.0.1:8000/post/${post_id}`)
        .then(response => {
          if (response.data.status_code == 200)
            setPost(response.data.data);
          else
            setPost({title:null, body:null, user:null});
        })
        .catch(error => {
          console.error(error);
      });
  }, [post_id]);

  return (
    <Link data-cy="post" to={`/post/${post_id}`} replace className={styles.container}>
      { !(post.title) ? (
          <span>Carregando...</span>
        ):(
          <div>
            <div className={styles.topbar}>
              <h2 className={styles.title}>{post.title}</h2>
              <span className={styles.user}>#{post.user}</span>
            </div>
              
              
            <h2 className={styles.postBody}>{post.body}</h2>
          </div>
        )
        }
    </Link>
  );
};

export default SearchResult;
