import classNames from "classnames";

export const PokemonCard = ({ pokemon, isSelected, onCardClick }) => {
  return (
    <div
      className={classNames(
        "nes-container with-title is-rounded is-centered hover:scale-102",
        {
          "bg-white": !isSelected,
          "bg-green-400": isSelected,
        }
      )}
      onClick={() => onCardClick(pokemon._id)}
    >
      <p
        className={classNames("title", {
          "!bg-green-400": isSelected,
        })}
      >
        {pokemon.name}
      </p>
      <div className="w-full min-h-[100px] relative mb-[10px]">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="absolute object-contain object-center w-full h-full"
        />
      </div>

      <ul class="nes-list is-circle text-[12px] flex flex-col gap-[10px]">
        <li className="text-left">Type - {pokemon.type.join(", ")}</li>
        <li className="text-left">HP - {pokemon.base.HP}</li>
        <li className="text-left">Attack - {pokemon.base.Attack}</li>
        <li className="text-left">Defense - {pokemon.base.Defense}</li>
        <li className="text-left">Speed - {pokemon.base.Speed}</li>
      </ul>
    </div>
  );
};
