import { GAME_SCREEN } from "../../contants";
import { useGame } from "../../providers/GameProvider/GameProvider";

export const GameOverScreen = () => {
  const { game, setScreen } = useGame();

  const youWin = game.winner === game.player1;

  return (
    <div className="min-h-full flex items-center justify-center">
      <div className="nes-container is-rounded is-centered bg-white">
        {youWin ? (
          <p className="nes-text is-success">You win!</p>
        ) : (
          <p className="nes-text is-error">You lose!</p>
        )}

        <button
          type="button"
          className="nes-btn is-primary"
          onClick={() => setScreen(GAME_SCREEN.POKEMON_SELECTION)}
        >
          Restart
        </button>
      </div>
    </div>
  );
};
