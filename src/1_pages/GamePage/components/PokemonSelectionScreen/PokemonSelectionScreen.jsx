import { useEffect, useState } from "react";
import { PokemonsService } from "../../../../services/pokemon.service";
import { PokemonsList } from "./components/PokemonsList";
import { Search } from "../../../../3_components/Search";
import classNames from "classnames";
import { useGame } from "../../providers/GameProvider";
import { useAuth } from "../../../../providers/AuthProvider";

export const PokemonSelectionScreen = () => {
  const { onStartGame } = useGame();
  const { user } = useAuth();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [pokemonsPagination, setPokemonsPagination] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    const loadPokemons = async () => {
      setPage(1);
      const response = await PokemonsService.loadPokemons(1, 20, search);
      setPokemonsPagination(response);
    };

    loadPokemons();
  }, [search]);

  const loadMorePokemons = async () => {
    setPage((prev) => prev + 1);
    const response = await PokemonsService.loadPokemons(page + 1, 20, search);
    setPokemonsPagination((prev) => ({
      ...response,
      pokemons: [...prev.pokemons, ...response.pokemons],
    }));
  };

  return (
    <div className="flex flex-col gap-[8px]">
      <p className="w-full text-center text-[24px]">Select your Pokemon</p>

      <div className="flex items-center justify-between flex-col md:flex-row gap-2">
        <Search searchValue={search} onChange={handleSearchChange} />

        <button
          type="button"
          disabled={!selectedPokemon}
          className={classNames("nes-btn w-full max-w-[360px]", {
            "is-disabled": !selectedPokemon,
            "is-success": selectedPokemon,
          })}
          onClick={() => onStartGame(user._id, selectedPokemon)}
        >
          Start game
        </button>
      </div>

      {Boolean(pokemonsPagination?.pokemons?.length) && (
        <PokemonsList
          pokemons={pokemonsPagination.pokemons}
          selectedPokemonId={selectedPokemon}
          onCardClick={(pokemonId) => setSelectedPokemon(pokemonId)}
        />
      )}

      <div className="w-full flex justify-center">
        {page < pokemonsPagination.totalPages && (
          <button
            type="button"
            class="nes-btn is-warning"
            onClick={loadMorePokemons}
          >
            More Pokemons
          </button>
        )}
      </div>
    </div>
  );
};
