import { useEffect, useRef, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent/BoardComponent';
import DisplayComponent from './components/DisplayComponent/DisplayComponent';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { FenManager } from './models/FenManager';
import { Player } from './models/Player';

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const restart = () => {
    const freshBoard = new Board();
    const fenManager = new FenManager(freshBoard);
    freshBoard.init();
    fenManager.parseFEN();
    //freshBoard.setFigures();
    setBoard(freshBoard);
    setCurrentPlayer(whitePlayer);
  };

  const swapPlayers = () => {
    setCurrentPlayer((current) =>
      current?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  };

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="app">
      <DisplayComponent player={currentPlayer} restart={restart} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayers={swapPlayers}
      />
    </div>
  );
}

export default App;
