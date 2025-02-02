import { RenderGameScreen } from "./components/RenderGameScreen/RenderGameScreen";
import { GameProvider } from "./providers/GameProvider";

export const GamePage = () => {
  return (
    <GameProvider>
      <RenderGameScreen />
    </GameProvider>
  );
};
