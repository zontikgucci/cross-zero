import PropTypes from 'prop-types';
import { InformationLayout } from '../InformationLayout/InformationLayout';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
  const message = () => {
    if (isDraw) {
      return `Ничья`;
    } else if (!isDraw && isGameEnded) {
      return `Победа: ${currentPlayer}`;
    } else {
      return `Ходит: ${currentPlayer}`;
    }
  };

  return <InformationLayout>{message()}</InformationLayout>;
};

Information.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};
