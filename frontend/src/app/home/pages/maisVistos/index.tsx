import { useState, useEffect } from 'react';
import './maisVistos.css';

function MaisVistos() {
  const [animeList, setAnimeList] = useState<{ name: string; views: number; img_url: string}[]>([]);
  const [orderOption, setOrderOption] = useState('decrescente');
  const [timePeriodOption, setTimePeriodOption] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const order_by = orderOption; // Usar a seleção do menu suspenso de ordenação como valor de "order_by"
    const max = parseInt(searchParams.get('max') || '10', 10);
    const t = timePeriodOption; // Usar a seleção do menu suspenso de período como valor de "t"

    console.log(order_by);
    console.log(t);
    
    //const apiUrl = `http://127.0.0.1:8000/mais-vistos/?order_by=${order_by}&max=${max}&t=${t}`;
    const apiUrl = `http://127.0.0.1:8000/mais-vistos/?order_by=${order_by}&max=${max}&t=${t}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setAnimeList(data.GET.anime_list));
  }, [orderOption, timePeriodOption]);

  const handleOrderChange = event => {
    setOrderOption(event.target.value);
  };

  const handleTimePeriodChange = event => {
    setTimePeriodOption(event.target.value);
  };

  return (
    <div className="mais-vistos">
      <h1 className="header">Mais Vistos</h1>
      <label htmlFor="orderSelect">Ordenar</label>
      <select
        data-cy="select-order"
        id="orderSelect"
        value={orderOption}
        onChange={handleOrderChange}
      >
        <option value="decrescente">Do maior para o menor</option>
        <option value="crescente">Do menor para o maior</option>
      </select>
      <label htmlFor="timePeriodSelect">Período</label>
      <select
        data-cy="select-period"
        id="timePeriodSelect"
        value={timePeriodOption}
        onChange={handleTimePeriodChange}
      >
        <option value="dia">Dia</option>
        <option value="semana">Semana</option>
        <option value="mes">Mês</option>
        <option value="trimestre">Trimestre</option>
        <option value="ano">Ano</option>
        <option value="">Sempre</option>
      </select>

      <ul data-cy="list-most-viewed" className="anime-list">
        {animeList.map(anime => (
          <li data-cy="anime-item" key={anime.name} className="anime-item">
            <img src={anime.img_url} alt={anime.name} className="anime-image" />
            <div className="anime-details">
              <span className="anime-name">{anime.name}</span>
              <span data-cy="item-value" className="anime-views">{anime.views} views</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MaisVistos;
