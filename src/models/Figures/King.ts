import Figure, { FigureNames } from './Figure';
import blackImage from '../../assets/black-king.svg';
import whiteImage from '../../assets/white-king.svg';
import { Colors } from '../Colors';
import Cell from '../Cell';

export default class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.image = color === Colors.WHITE ? whiteImage : blackImage;
    this.name = FigureNames.KING;
  }
}
