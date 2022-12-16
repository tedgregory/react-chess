import Figure, { FigureNames } from './Figure';
import blackImage from '../../assets/black-knight.svg';
import whiteImage from '../../assets/white-knight.svg';
import { Colors } from '../Colors';
import Cell from '../Cell';

export default class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteImage : blackImage;
    this.name = FigureNames.KNIGHT;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);
    if ((dx === 1 && dy === 2) || (dx === 2 && dy === 1)) {
      return true;
    }
    return false;
  }
}
