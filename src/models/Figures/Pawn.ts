import Figure, { FigureNames } from './Figure';
import blackImage from '../../assets/img/black-pawn.svg';
import whiteImage from '../../assets/img/white-pawn.svg';
import { Colors } from '../Colors';
import Cell from '../Cell';

export default class Pawn extends Figure {
  isVirgin = true;
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteImage : blackImage;
    this.name = FigureNames.PAWN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const direction = this.color === Colors.BLACK ? 1 : -1;
    const initDirection = this.color === Colors.BLACK ? 2 : -2;
    if (
      (target.y === this.cell.y + direction ||
        (this.isVirgin && target.y === this.cell.y + initDirection)) &&
      target.x === this.cell.x &&
      this.cell.board.getCell(target.x, target.y).isEmptyCell()
    ) {
      return true;
    }

    if (
      target.y === this.cell.y + direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.isEnemy(target)
    ) {
      return true;
    }

    return false;
  }

  moveTo(target: Cell): void {
    super.moveTo(target);
    this.isVirgin = false;
  }
}
