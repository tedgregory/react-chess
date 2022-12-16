import Figure, { FigureNames } from './Figure';
import blackImage from '../../assets/black-pawn.svg';
import whiteImage from '../../assets/white-pawn.svg';
import { Colors } from '../Colors';
import Cell from '../Cell';

export default class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteImage : blackImage;
    this.name = FigureNames.PAWN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    return true;
  }
}
