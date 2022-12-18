import Figure from '../../models/Figures/Figure';
import css from './PrisonComponent.module.scss';

type PropsType = {
  title: string;
  figures: Figure[];
};

export default function PrisonComponent({ title, figures }: PropsType) {
  return (
    <div>
      <h3 className={css.prisonName}>{title}</h3>
      <div className={css.prison}>
        {figures.map((figure) => (
          <div key={figure.id} className={css.prisonCell}>
            <img className={css.icon} src={figure.image} alt={figure.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
