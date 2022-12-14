import Figure, { FigureNames } from './Figure';
import blackImage from '../../assets/black-rook.svg';
import whiteImage from '../../assets/white-rook.svg';
import { Colors } from '../Colors';
import Cell from '../Cell';

export default class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteImage : blackImage;
    this.name = FigureNames.ROOK;
  }
}
