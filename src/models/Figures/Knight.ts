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
}
