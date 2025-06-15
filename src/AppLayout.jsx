import PropTypes from 'prop-types';
import styles from './App.module.css';
import { Field, Information } from './components';

export const AppLayout = ({
  currentPlayer,
  isGameEnded,
  isDraw,
  field,

  setCurrentPlayer,
  setIsGameEnded,
  setIsDraw,
  setField,

  reset,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Игра Крестики-Нолики</h1>
      <Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
      <Field
        currentPlayer={currentPlayer}
        field={field}
        isGameEnded={isGameEnded}
        setCurrentPlayer={setCurrentPlayer}
        setIsGameEnded={setIsGameEnded}
        setField={setField}
        setIsDraw={setIsDraw}
      />
      <button className={styles.resetButton} onClick={reset}>
        Начать заново
      </button>
    </div>
  );
};

AppLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
  field: PropTypes.arrayOf(PropTypes.oneOf(['X', '0', ''])).isRequired,

  setCurrentPlayer: PropTypes.func.isRequired,
  setIsGameEnded: PropTypes.func.isRequired,
  setIsDraw: PropTypes.func.isRequired,
  setField: PropTypes.func.isRequired,

  reset: PropTypes.func.isRequired,
};
