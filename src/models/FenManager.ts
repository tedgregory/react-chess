import { Board } from './Board';
import Cell from './Cell';
import { Colors } from './Colors';
import { FenFigures } from './FenModels';
import Bishop from './Figures/Bishop';
import King from './Figures/King';
import Knight from './Figures/Knight';
import Pawn from './Figures/Pawn';
import Queen from './Figures/Queen';
import Rook from './Figures/Rook';

export class FenManager {
  board: Board;
  defaultSet = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  constructor(board: Board) {
    this.board = board;
  }

  // default rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1

  parseFEN(fenData?: string) {
    if (!fenData) {
      fenData = this.defaultSet;
    }
    const boardMap = fenData.split(' ')[0].split('/');
    const regex = /\d/gi;
    boardMap.forEach((row, i) => {
      const parsedRow = row.replaceAll(regex, ($1) => {
        return 'x'.repeat(+$1);
      });
      //console.log(JSON.stringify(this.board.cells));
      this.board.cells[i].forEach((cell, j) => {
        this.createFigure(parsedRow[j] as FenFigures, cell);
      });
    });
  }

  createFigure(type: FenFigures, cell: Cell) {
    switch (type) {
      case FenFigures.WHITE_PAWN:
        new Pawn(Colors.WHITE, cell);
        break;
      case FenFigures.WHITE_KING:
        new King(Colors.WHITE, cell);
        break;
      case FenFigures.WHITE_ROOK:
        new Rook(Colors.WHITE, cell);
        break;
      case FenFigures.WHITE_QUEEN:
        new Queen(Colors.WHITE, cell);
        break;
      case FenFigures.WHITE_BISHOP:
        new Bishop(Colors.WHITE, cell);
        break;
      case FenFigures.WHITE_KNIGHT:
        new Knight(Colors.WHITE, cell);
        break;
      case FenFigures.BLACK_PAWN:
        new Pawn(Colors.BLACK, cell);
        break;
      case FenFigures.BLACK_KING:
        new King(Colors.BLACK, cell);
        break;
      case FenFigures.BLACK_ROOK:
        new Rook(Colors.BLACK, cell);
        break;
      case FenFigures.BLACK_QUEEN:
        new Queen(Colors.BLACK, cell);
        break;
      case FenFigures.BLACK_BISHOP:
        new Bishop(Colors.BLACK, cell);
        break;
      case FenFigures.BLACK_KNIGHT:
        new Knight(Colors.BLACK, cell);
        break;
      default:
      //console.log('EMPTY CELL');
    }
  }
  //
}
