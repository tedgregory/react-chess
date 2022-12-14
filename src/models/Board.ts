import Cell from './Cell';
import { Colors } from './Colors';
import Queen from './Figures/Queen';

export class Board {
  cells: Cell[][] = [];

  init() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        row.push(
          new Cell(
            this,
            i,
            j,
            (i + j) % 2 === 0 ? Colors.WHITE : Colors.BLACK,
            null
          )
        );
      }
      this.cells.push(row);
    }
  }

  getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public setFigures() {
    new Queen(Colors.WHITE, this.getCell(0, 0));
  }
}
