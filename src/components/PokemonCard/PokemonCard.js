import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon, error }) => {
  return (
    <div className="pokemon-card">
      {pokemon && (
        <section>
          <h3>{pokemon.name}</h3>
          <img
            loading="lazy"
            className="pokemon-sprite"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <article className="pokemon-data">
            <details>
              <summary>ID</summary>
              <p>{pokemon.id}</p>
            </details>
            <details>
              <summary>Types</summary>
              {pokemon.types.map((entry) => (
                <a href={entry.type.url}>{entry.type.name}</a>
              ))}
            </details>
            <details>
              <summary>Abilities</summary>
              {pokemon.abilities.map((entry) => (
                <a href={entry.ability.url}>{entry.ability.name}</a>
              ))}
            </details>
            <details>
              <summary>Moves</summary>
              {pokemon.moves.map((entry) => (
                <a href={entry.move.url}>{entry.move.name}</a>
              ))}
            </details>
          </article>
        </section>
      )}
      {error && (
        <h3 className="pokemon-error">ERROR: {JSON.stringify(error)}</h3>
      )}
    </div>
  );
};

export default PokemonCard;
