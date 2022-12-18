import React, { useEffect, useState } from 'react';
import { Board } from '../../models/Board';
import Cell from '../../models/Cell';
import { Player } from '../../models/Player';
import CellComponent from '../CellComponent/CellComponent';
import PrisonComponent from '../PrisonComponent/PrisonComponent';
import css from './BoardComponent.module.scss';

type PropsType = {
  board: Board;
  setBoard: (b: Board) => void;
  currentPlayer: Player | null;
  swapPlayers: () => void;
};

export default function BoardComponent({
  board,
  setBoard,
  currentPlayer,
  swapPlayers,
}: PropsType) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const handleClick = (cell: Cell) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayers();
      setSelectedCell(null);
    } else if (selectedCell && selectedCell === cell) {
      setSelectedCell(null);
    } else if (cell.figure?.color === currentPlayer?.color) {
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
    <>
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
      <PrisonComponent title="White prison" figures={board.whitePrison} />
      <PrisonComponent title="Black prison" figures={board.blackPrison} />
    </>
  );
}
