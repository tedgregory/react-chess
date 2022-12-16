import Cell from '../../models/Cell';
import { Colors } from '../../models/Colors';
import clx from '../../utils/clx';
import css from './CellComponent.module.scss';

type PropsType = {
  cell: Cell;
  active: boolean;
  click: () => void;
};

export default function CellComponent({ cell, active, click }: PropsType) {
  return (
    <div
      className={clx({
        [css.cell]: true,
        [cell.bgColor === Colors.WHITE ? css.white : css.black]: true,
      })}
      onClick={() => click()}
    >
      {cell.figure && (
        <div
          className={clx({
            [css.cellImgWrapper]: true,
            [css.active]: active,
          })}
        >
          <img
            className={css.cellImg}
            src={cell.figure.image}
            alt={`${cell.figure.color} ${cell.figure.name}`}
          />
        </div>
      )}
      {cell.figure && cell.available && <div className={css.enemy}></div>}
      {cell.available && <div className={css.available}></div>}
    </div>
  );
}
