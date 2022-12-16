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

  isEnemy(target: Cell) {
    if (target.figure) {
      return this.figure?.color !== target.figure.color;
    }
    return false;
  }

  isEmptyVert(target: Cell) {
    if (this.x !== target.x) {
      return false;
    }

    const min = Math.min(this.y, target.y) + 1;
    const max = Math.max(this.y, target.y);
    for (let y = min; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmptyCell()) {
        return false;
      }
    }
    return true;
  }

  isEmptyHoriz(target: Cell) {
    if (this.y !== target.y) {
      return false;
    }

    const min = Math.min(this.x, target.x) + 1;
    const max = Math.max(this.x, target.x);
    for (let x = min; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmptyCell()) {
        return false;
      }
    }
    return true;
  }

  isEmptyDiag(target: Cell) {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);

    if (absX !== absY) {
      return false;
    }

    const dx = this.x < target.x ? 1 : -1;
    const dy = this.y < target.y ? 1 : -1;

    for (let i = 1; i < absX; i++) {
      if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmptyCell()) {
        return false;
      }
    }
    return true;
  }
}
