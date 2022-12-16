import Figure, { FigureNames } from './Figure';
import blackImage from '../../assets/black-queen.png';
import whiteImage from '../../assets/white-queen.svg';
import { Colors } from '../Colors';
import Cell from '../Cell';

export default class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteImage : blackImage;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyVert(target)) {
      return true;
    }
    return false;
  }
}
