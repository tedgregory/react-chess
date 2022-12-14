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
}
