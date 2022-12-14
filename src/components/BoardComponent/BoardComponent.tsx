import React from 'react';
import { Board } from '../../models/Board';
import CellComponent from '../CellComponent/CellComponent';

type PropsType = {
  board: Board;
  setBoard: (b: Board) => void;
};

export default function BoardComponent({ board, setBoard }: PropsType) {
  return (
    <div className="board">
      {board.cells.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((cell) => (
            <CellComponent key={cell.id} cell={cell} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
