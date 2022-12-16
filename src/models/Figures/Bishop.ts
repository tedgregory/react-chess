import Cell from '../Cell';
import { Colors } from '../Colors';
import Figure, { FigureNames } from './Figure';
import blackImage from '../../assets/black-bishop.svg';
import whiteImage from '../../assets/white-bishop.svg';

export default class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteImage : blackImage;
    this.name = FigureNames.BISHOP;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyDiag(target)) {
      return true;
    }
    return false;
  }
}
