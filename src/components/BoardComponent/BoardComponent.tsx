import React, { useEffect, useState } from 'react';
import { Board } from '../../models/Board';
import Cell from '../../models/Cell';
import CellComponent from '../CellComponent/CellComponent';
import css from './BoardComponent.module.scss';

type PropsType = {
  board: Board;
  setBoard: (b: Board) => void;
};

export default function BoardComponent({ board, setBoard }: PropsType) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const handleClick = (cell: Cell) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else if (selectedCell && selectedCell === cell) {
      setSelectedCell(null);
    } else {
      setSelectedCell(cell);
    }
  };

  const highLightCells = () => {
    board.highLightCells(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    setBoard(board.getCopy());
  };

  useEffect(() => {
    highLightCells();
  }, [selectedCell]);

  return (
    <div className={css.board}>
      {board.cells.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((cell) => (
            <CellComponent
              key={cell.id}
              cell={cell}
              active={cell === selectedCell}
              click={() => handleClick(cell)}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
