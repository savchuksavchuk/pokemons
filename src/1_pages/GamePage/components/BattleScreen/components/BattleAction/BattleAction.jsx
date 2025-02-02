import { useGame } from "../../../../providers/GameProvider/GameProvider";
import { useAuth } from "../../../../../../providers/AuthProvider";
import classNames from "classnames";

export const BattleAction = () => {
  const { onAttack, game } = useGame();
  const { user } = useAuth();
  console.log(game);

  const yourTurn = game.currentTurn === user._id;

  return (
    <div className="nes-container is-rounded bg-white flex flex-col items-center">
      {yourTurn ? (
        <p className="nes-text is-success">Your turn!</p>
      ) : (
        <p className="nes-text is-error">Opponent's turn</p>
      )}

      <button
        type="button"
        class={classNames("nes-btn is-error", {
          "is-disabled": game.currentTurn !== user._id,
        })}
        disabled={game.currentTurn !== user._id}
        onClick={() => onAttack(user._id)}
      >
        Attack!
      </button>
    </div>
  );
};
