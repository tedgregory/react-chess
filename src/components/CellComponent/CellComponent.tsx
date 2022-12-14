import Cell from '../../models/Cell';
import { Colors } from '../../models/Colors';
import clx from '../../utils/clx';

type PropsType = {
  cell: Cell;
};

export default function CellComponent({ cell }: PropsType) {
  return (
    <div
      className={clx({
        cell: true,
        [cell.bgColor === Colors.WHITE ? 'white' : 'black']: true,
      })}
    >
      {cell.figure && <img src={cell.figure.image} alt="" />}
    </div>
  );
}
