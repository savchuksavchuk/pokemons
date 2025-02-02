import { HealthBar } from "../../4_ui/HealthBar";

export const PokemonBattleCard = ({ pokemon, isOponent = false }) => {
  return (
    <div className="nes-container with-title is-rounded is-centered w-full max-w-[300px] bg-white">
      <p className="title">{isOponent ? "Oponent" : "You"}</p>

      <p className="">{pokemon.name}</p>

      <HealthBar maxHealth={pokemon.maxHp} currentHealth={pokemon.currentHp} />

      <div className="w-full min-h-[150px] md:min-h-[250px] relative mb-[10px]">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="absolute object-contain object-center w-full h-full"
        />
      </div>

      <ul class="nes-list is-circle text-[12px] flex flex-col gap-[10px]">
        <li className="text-left">Attack - {pokemon.attack}</li>
        <li className="text-left">Defense - {pokemon.defense}</li>
        <li className="text-left">Speed - {pokemon.speed}</li>
      </ul>
    </div>
  );
};
