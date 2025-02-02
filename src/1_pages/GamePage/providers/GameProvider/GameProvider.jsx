import { createContext, useContext, useEffect, useRef, useState } from "react";
import { GAME_SCREEN } from "../../contants";
import { io } from "socket.io-client";
import { API_URL } from "../../../../config";

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [screen, setScreen] = useState(GAME_SCREEN.POKEMON_SELECTION);
  const [game, setGame] = useState(null);
  const gameSocket = useRef(null);

  useEffect(() => {
    initializeSocket();

    return () => {
      cleanupSocket();
    };
  }, []);

  const initializeSocket = () => {
    gameSocket.current = io(`${API_URL}/game/game-with-bot`);

    gameSocket.current.on("game-started", handleGameCreated);
    gameSocket.current.on("game-updated", handleGameUpdated);
    gameSocket.current.on("game-finished", handleGameFinished);

    gameSocket.current.on("error", () => {
      console.log("Error in game socket");
    });
  };

  const cleanupSocket = () => {
    if (gameSocket.current) {
      gameSocket.current.disconnect();
    }
  };

  const handleGameCreated = ({ message }) => {
    setGame(message);
    setScreen(GAME_SCREEN.BATTLE);
  };

  const handleGameUpdated = ({ message }) => {
    setGame(message);
  };

  const handleGameFinished = ({ message }) => {
    setGame(message);
    setScreen(GAME_SCREEN.GAME_OVER);
  };

  const onAttack = (playerId) => {
    gameSocket.current.emit("attack", { gameId: game._id, playerId });
  };

  const onStartGame = (playerId, pokemonId) => {
    gameSocket.current.emit("start-with-bot", { playerId, pokemonId });
  };

  const value = { screen, setScreen, game, onStartGame, onAttack };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
