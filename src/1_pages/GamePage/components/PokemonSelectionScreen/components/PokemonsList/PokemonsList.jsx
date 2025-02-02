import { PokemonCard } from "../../../../../../3_components/PokemonCard/PokemonCard";

export const PokemonsList = ({ pokemons, selectedPokemonId, onCardClick }) => {
  return (
    <div className="pokemons_list_grid">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.pokedex_id}
            pokemon={pokemon}
            isSelected={selectedPokemonId === pokemon._id}
            onCardClick={onCardClick}
          />
        );
      })}
    </div>
  );
};
