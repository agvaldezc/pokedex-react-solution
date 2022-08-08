import React, { useState } from 'react';
import PokemonCard from './PokemonCard.js';
import { getPokemon } from '../../services/api.js';

import './Pokedex.css';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [isValidQuery, setIsValidQuery] = useState(false);

  const changeHandler = (event) => {
    setIsValidQuery(!!event.currentTarget.value);
    setQuery(event.currentTarget.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    getPokemon(query)
      .then((res) => {
        setPokemon(res);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setPokemon(null);
      });
  };

  return (
    <section className="pokedex">
      <form className="pokedex-search-form" onSubmit={submitHandler}>
        <h2>Pokedex Component</h2>
        <fieldset>
          <input
            name="query"
            type="text"
            placeholder="Pokemon name or ID"
            onChange={changeHandler}
            value={query}
          />
          <button type="submit" disabled={!isValidQuery}>
            Search Pokemon
          </button>
        </fieldset>
      </form>
      <article className="pokedex-container">
        <PokemonCard pokemon={pokemon} error={error} />
      </article>
    </section>
  );
};

export default Pokedex;
