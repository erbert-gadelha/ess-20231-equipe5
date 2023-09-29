import styles from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import FeedItem from "../../components/feedItem";
import FeedCard from "../../components/feedCard";
import { Link } from "react-router-dom";

const TelaInicial = () => {

  
  const [feed, setFeed] = useState([] as string[]);
  useEffect(() => {
  axios.get(`http://127.0.0.1:8000/feed`)
        .then(response => {
          if (response.status == 200){
            const posts = response.data.posts;

            const temp = [];
            posts.forEach((post) => {
              temp.push(post.id);
            });
            
            setFeed(temp);
          }
        })
        .catch(error => {
          console.error(error);
  });
  }, []);

  const [mostViewed, setMostViewd] = useState([] as object[]);
  useEffect(() => {
  axios.get(`http://127.0.0.1:8000/mais-vistos/`)
        .then(response => {
          if (response.status == 200){
            const anime_list = response.data.GET.anime_list;
            setMostViewd(anime_list);
          }
        })
        .catch(error => {
          console.error(error);
  });
  }, []);

  const [mostRated, setMostRated] = useState([] as object[]);
  useEffect(() => {
  axios.get(`http://127.0.0.1:8000/mais-bem-avaliados/`)
        .then(response => {
          if (response.status == 200){
            const anime_list = response.data.GET.anime_list;
            setMostRated(anime_list);
          }
        })
        .catch(error => {
          console.error(error);
  });
  }, []);

  const [trending, setTrending] = useState([] as object[]);
  useEffect(() => {
    
  axios.get(`http://127.0.0.1:8000/mais-vistos/?order_by=decrescente&max=10&t=mes`)
        .then(response => {
          if (response.status == 200){
            const anime_list = response.data.GET.anime_list;
            setTrending(anime_list);
          }
        })
        .catch(error => {
          console.error(error);
  });
  }, []);



  return (
    <section className={styles.container}>
        <div className={styles.esq}>
            <Link data-cy="link-trending" to="emalta" className={styles.bar_header}>
              <h2>Em Alta</h2>
            </Link>
            <div className={styles.barra}>
              <div data-cy="list-trending" className={styles.barra_aux}>
                    {mostViewed?
                    trending.map((anime, index) => {
                      return <FeedCard src={anime.img_url} title={anime.name} descr={`views: ${anime.views}`} key={index}/>
                    }):
                    <span>Carregando...</span>
                    }
                </div>
            </div>

            <Link data-cy="link-most-rated" to="mais-bem-avaliados" className={styles.bar_header}>
              <h2>Mais bem avaliados</h2>
            </Link>
            <div className={styles.barra}>
              <div data-cy="list-most-rated" className={styles.barra_aux}>
                    {mostViewed?
                    mostRated.map((anime, index) => {
                      return <FeedCard src={anime.img_url} title={anime.name} descr={`media: ${anime.rating}`} key={index}/>
                    }):
                    <span>Carregando...</span>
                    }
                </div>
            </div>

            <Link data-cy="link-most-viewed" to="mais-vistos" className={styles.bar_header}>
              <h2>Mais Lidos/Vistos</h2>
            </Link>
            <div className={styles.barra}>
                <div data-cy="list-most-viewed"className={styles.barra_aux}>
                    {mostViewed?
                    mostViewed.map((anime, index) => {
                      return <FeedCard src={anime.img_url} title={anime.name} descr={`views: ${anime.views}`} key={index}/>
                    }):
                    <span>Carregando...</span>
                    }
                </div>
            </div>
        </div>
        <div className={styles.dir}>
            <h1>Fórum</h1>
            <div className={styles.feed_cont}>
              <div className={styles.feed}>
                  {feed?
                  feed.map((post, index) => { return <FeedItem key={index} post_id={post}/> }):
                  <span>Carregando...</span>
                  }
              </div>
            </div>
        </div>
    </section>
  );
};

export default TelaInicial;