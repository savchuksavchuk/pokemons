import { GAME_SCREEN } from "../../contants";
import { useGame } from "../../providers/GameProvider";
import { BattleScreen } from "../BattleScreen";
import { GameOverScreen } from "../GameOverScreen";
import { PokemonSelectionScreen } from "../PokemonSelectionScreen";

const SCREENS = {
  [GAME_SCREEN.POKEMON_SELECTION]: <PokemonSelectionScreen />,
  [GAME_SCREEN.BATTLE]: <BattleScreen />,
  [GAME_SCREEN.GAME_OVER]: <GameOverScreen />,
};

export const RenderGameScreen = () => {
  const { screen } = useGame();

  return SCREENS[screen];
};
