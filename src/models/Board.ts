import Cell from './Cell';
import { Colors } from './Colors';
import Bishop from './Figures/Bishop';
import Figure from './Figures/Figure';
import King from './Figures/King';
import Knight from './Figures/Knight';
import Pawn from './Figures/Pawn';
import Queen from './Figures/Queen';
import Rook from './Figures/Rook';

export class Board {
  cells: Cell[][] = [];
  whitePrison: Figure[] = [];
  blackPrison: Figure[] = [];

  private setKings() {
    new King(Colors.BLACK, this.getCell(4, 0));
    new King(Colors.WHITE, this.getCell(4, 7));
  }

  private setQueens() {
    new Queen(Colors.BLACK, this.getCell(3, 0));
    new Queen(Colors.WHITE, this.getCell(3, 7));
  }

  private setBishops() {
    new Bishop(Colors.BLACK, this.getCell(2, 0));
    new Bishop(Colors.BLACK, this.getCell(5, 0));
    new Bishop(Colors.WHITE, this.getCell(2, 7));
    new Bishop(Colors.WHITE, this.getCell(5, 7));
  }

  private setKnights() {
    new Knight(Colors.BLACK, this.getCell(1, 0));
    new Knight(Colors.BLACK, this.getCell(6, 0));
    new Knight(Colors.WHITE, this.getCell(1, 7));
    new Knight(Colors.WHITE, this.getCell(6, 7));
  }

  private setRooks() {
    new Rook(Colors.BLACK, this.getCell(0, 0));
    new Rook(Colors.BLACK, this.getCell(7, 0));
    new Rook(Colors.WHITE, this.getCell(0, 7));
    new Rook(Colors.WHITE, this.getCell(7, 7));
  }

  private setPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  init() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        row.push(
          new Cell(
            this,
            j,
            i,
            (i + j) % 2 === 0 ? Colors.WHITE : Colors.BLACK,
            null
          )
        );
      }
      this.cells.push(row);
    }
  }

  getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  getCopy() {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.whitePrison = this.whitePrison;
    newBoard.blackPrison = this.blackPrison;
    return newBoard;
  }

  highLightCells(selectedCell: Cell | null) {
    for (let row of this.cells) {
      for (let cell of row) {
        cell.available = !!selectedCell?.figure?.canMove(cell);
      }
    }
  }

  setFigures() {
    this.setKings();
    this.setQueens();
    this.setBishops();
    this.setRooks();
    this.setKnights();
    this.setPawns();
  }

  addToPrison(figure: Figure) {
    if (figure.color === Colors.WHITE) {
      this.blackPrison.push(figure);
    } else {
      this.whitePrison.push(figure);
    }
  }
}
