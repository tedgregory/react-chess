import Figure, { FigureNames } from './Figure';
import blackImage from '../../assets/img/black-king.svg';
import whiteImage from '../../assets/img/white-king.svg';
import { Colors } from '../Colors';
import Cell from '../Cell';

export default class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteImage : blackImage;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const stepX = Math.abs(this.cell.x - target.x);
    const stepY = Math.abs(this.cell.y - target.y);
    if (stepX > 1 || stepY > 1) {
      return false;
    }
    return true;
  }
}
