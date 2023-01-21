import { useEffect, useRef, useState } from 'react';
import { Colors } from '../../models/Colors';
import { Player } from '../../models/Player';
import { dateToHMS } from '../../utils/time';
import css from './DisplayComponent.module.scss';

type PropsType = {
  player: Player | null;
  restart: () => void;
};

export default function DisplayComponent({ player, restart }: PropsType) {
  const [timeWhite, setTimeWhite] = useState(0);
  const [timeBlack, setTimeBlack] = useState(0);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  function incBlack() {
    setTimeBlack((prev) => prev + 1);
  }
  function incWhite() {
    setTimeWhite((prev) => prev + 1);
  }
  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback = player?.color === Colors.WHITE ? incWhite : incBlack;
    timer.current = setInterval(callback, 1000);
  }

  function reset() {
    setTimeBlack(0);
    setTimeWhite(0);
    restart();
  }

  useEffect(() => {
    startTimer();
  }, [player]);

  return (
    <div>
      <div>
        Game time: white{' '}
        {new Date(timeWhite * 1000).toISOString().substring(14, 19)} / black{' '}
        {new Date(timeBlack * 1000).toISOString().substring(14, 19)}
      </div>
      <div>
        <button className={css.restartButton} onClick={() => reset()}>
          Restart game
        </button>
      </div>
    </div>
  );
}
