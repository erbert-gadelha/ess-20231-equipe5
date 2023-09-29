import { useState, useEffect } from 'react';
import './maisBemAvaliados.css';

function maisBemAvaliados() {
  const [animeList, setAnimeList] = useState<{ name: string; rating: number; img_url: string }[]>([]);
  const [orderOption, setOrderOption] = useState('decrescente');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const order_by = orderOption;
    const max = parseInt(searchParams.get('max') || '10', 10);
    const apiUrl = `http://127.0.0.1:8000/mais-bem-avaliados/?order_by=${order_by}&max=${max}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setAnimeList(data.GET.anime_list));
  }, [orderOption]);

  const handleOrderChange = event => {
    setOrderOption(event.target.value);
  };

  return (
    <div className="mais-bem-avaliados">
      <h1 className='header'>Mais Bem Avaliados</h1>

      <label htmlFor="orderSelect">Ordenar</label>
      <select
        data-cy="selector-order"
        id="orderSelect"
        value={orderOption}
        onChange={handleOrderChange}
      >
        <option value="decrescente">Do maior para o menor</option>
        <option value="crescente">Do menor para o maior</option>
      </select>

      <ul data-cy="list-most-rated" className="anime-list">
        {animeList.map(anime => (
          <li key={anime.name} className="anime-item">
          <img src={anime.img_url} alt={anime.name} className="anime-image" />
            <div className="anime-details">
            <span className="anime-name">{anime.name}</span>
            <span data-cy="item-value" className="anime-rating">Nota: {anime.rating}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default maisBemAvaliados;
