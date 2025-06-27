import { InformationLayout } from '../InformationLayout/InformationLayout';
import { useSelector } from 'react-redux';
import { selecIsDraw, selectPlayer, selectIsGameEnded } from '../../selectors';

export const Information = () => {
  const player = useSelector(selectPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);
  const isDraw = useSelector(selecIsDraw);

  const message = () => {
    if (isDraw) {
      return `Ничья`;
    } else if (!isDraw && isGameEnded) {
      return `Победа: ${player}`;
    } else {
      return `Ходит: ${player}`;
    }
  };
  return <InformationLayout>{message()}</InformationLayout>;
};
