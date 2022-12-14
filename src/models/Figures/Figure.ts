import { Colors } from '../Colors';
import img from '../../assets/black-knight.svg';
import Cell from '../Cell';

export enum FigureNames {
  FIGURE = '',
  PAWN = 'PAWN',
  ROOK = 'ROOK',
  KNIGHT = 'KNIGHT',
  BISHOP = 'BISHOP',
  QUEEN = 'QUEEN',
  KING = 'KING',
}

export default class Figure {
  color: Colors;
  image: typeof img | undefined;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.image = undefined;
    this.name = FigureNames.FIGURE;
    this.id = Math.ceil(Math.random() * 8888);
  }

  canMove(target: Cell): boolean {
    return true;
  }

  moveTo(target: Cell) {
    return;
  }
}
