import Figure, { FigureNames } from './Figure';
import blackImage from '../../assets/img/black-rook.svg';
import whiteImage from '../../assets/img/white-rook.svg';
import { Colors } from '../Colors';
import Cell from '../Cell';

export default class Rook extends Figure {
  isVirgin = true;
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteImage : blackImage;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVert(target)) {
      return true;
    }
    if (this.cell.isEmptyHoriz(target)) {
      return true;
    }
    return false;
  }

  moveTo(target: Cell): void {
    super.moveTo(target);
    this.isVirgin = false;
  }
}
