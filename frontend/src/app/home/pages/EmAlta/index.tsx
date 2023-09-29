import styles from "./index.module.css";
import axios from "axios";
import { useEffect, useState } from "react";


const EmAlta = () => {
    const [animeList, setAnimelist] = useState([]);
    const [headerText, setHeaderText] = useState('Em Alta');

    const getAnimes = async(param='') => {
        if(param != '') {
            const response = await axios.get(`http://127.0.0.1:8000/emalta/${param}`);
            setAnimelist(response.data);
            setHeaderText(`Em Alta no ${param}`);
        }
        else {
            const url = window.location.href;
            let query = url.split('/').pop();
            
            if(!(query == "dia" || query == "semana" || query == "trimestre" || query == "ano"))
                query = "dia";

            window.history.pushState({},`/emalta/${query}`);
    
            const response = await axios.get(`http://127.0.0.1:8000/emalta/${query}`);
            setAnimelist(response.data);
            setHeaderText(`Em Alta no ${query}`);
        }
        
    }

    useEffect(() => {
        getAnimes();
    }, []);

    

        
    return (
        <section className={styles.container}>
            <div className={styles.toolbar} role="toolbar" aria-label="Toolbar with button groups"> 
                <h2 data-cy="header-trending" id="header-emalta" className={styles.headeremalta}>{headerText}</h2>   
                
                <div className={styles.botoes}>
                    <button data-cy="button-trending-day" className={styles.botao} onClick={() => {getAnimes('dia')}}>dia</button>
                    <button data-cy="button-trending-week" className={styles.botao} onClick={() => {getAnimes('semana')}}>semana</button>
                    <button data-cy="button-trending-trimeter" className={styles.botao} onClick={() => {getAnimes('trimestre')}}>trimestre</button>
                    <button data-cy="button-trending-year" className={styles.botao} onClick={() => {getAnimes('ano')}}>ano</button>
                </div>
            </div>    
            <table className="table">
                <caption>{headerText}</caption>
            <thead className={styles.tableLight}>    
                <tr className={styles.tableLight}>
                    <th className={styles.tableLight}>Animes</th>
                    <th>Qtd. Assistidos</th>
                </tr>
            </thead>    
                <tbody className="table-group-divider">
                    {animeList.map((anime, index) => (
                        //<tr key={(anime as any).id}>
                        //<tr key={index}>
                        <tr data-cy="anime-card" key={(anime as any).nome_anime}>
                            <th>{(anime as any).nome_anime}</th>
                            <th data-cy="item-value">{(anime as any).assistidos_periodo}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
};

export default EmAlta;