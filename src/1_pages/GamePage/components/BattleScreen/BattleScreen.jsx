import { useGame } from "../../providers/GameProvider/GameProvider";
import { PokemonBattleCard } from "../../../../3_components/PokemonBattleCard";
import { BattleAction } from "./components/BattleAction";
import { BattleLogs } from "./components/BattleLogs/BattleLogs";

export const BattleScreen = () => {
  const { game } = useGame();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between gap-[32px] flex-col md:flex-row">
        <PokemonBattleCard pokemon={game.player1_pokemon} />

        <BattleAction />

        <PokemonBattleCard pokemon={game.player2_pokemon} isOponent />
      </div>

      <BattleLogs />
    </div>
  );
};
