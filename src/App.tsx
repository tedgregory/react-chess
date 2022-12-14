import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent/BoardComponent';
import { Board } from './models/Board';

function App() {
  const [board, setBoard] = useState(new Board());

  const restart = () => {
    const freshBoard = new Board();
    freshBoard.init();
    freshBoard.setFigures();
    setBoard(freshBoard);
  };

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
