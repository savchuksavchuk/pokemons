import classNames from "classnames";
import { useGame } from "../../../../providers/GameProvider/GameProvider";

export const BattleLogs = () => {
  const { game } = useGame();
  return (
    <div className="nes-container is-rounded is-dark with-title">
      <p className="title">Battle logs</p>
      <ul class="text-[12px] flex flex-col gap-[10px]">
        {game.logs.map((log, index) => (
          <li
            key={index}
            className={classNames("text-left", {
              "nes-text is-success": log.player === game.player1,
              "nes-text is-error": log.player === game.player2,
            })}
          >
            {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
};
