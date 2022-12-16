import { Board } from './Board';
import { Colors } from './Colors';
import Figure from './Figures/Figure';

export default class Cell {
  readonly x: number;
  readonly y: number;
  board: Board;
  bgColor: Colors;
  figure: Figure | null;
  available: boolean;
  id: number;
  constructor(
    board: Board,
    x: number,
    y: number,
    bgColor: Colors,
    figure: Figure | null
  ) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.bgColor = bgColor;
    this.figure = figure;
    this.available = false;
    this.id = Math.floor(Math.random() * 100000);
  }

  setFigure(figure: Figure) {
    this.figure = figure;
    this.figure.cell = this;
  }

  moveFigure(target: Cell) {
    if (this.figure && this.figure.canMove(target)) {
      this.figure.moveTo(target);
      target.setFigure(this.figure);
      this.figure = null;
    }
  }

  isEmptyCell() {
    return this.figure === null;
  }

  isEmptyVert(target: Cell) {
    if (this.x !== target.x) {
      return false;
    }

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);
    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmptyCell()) {
        return false;
      }
    }
    return true;
  }

  isEmptyHoriz(target: Cell) {
    if (this.x !== target.x) {
      return false;
    }
  }

  isEmptyDiag(target: Cell) {}
}
