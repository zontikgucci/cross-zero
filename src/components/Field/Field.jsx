import PropTypes from 'prop-types';
import { FieldLayout } from '../FieldLayout/FieldLayout';

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8],
  [2, 4, 6], // Варианты побед по диагонали
];

export const Field = ({ currentPlayer, field, isGameEnded, setCurrentPlayer, setIsGameEnded, setField, setIsDraw }) => {
  const checkWinner = (field) => {
    const winner = WIN_PATTERNS.find(([a, b, c]) => field[a] !== '' && field[a] === field[b] && field[a] === field[c]);
    return winner ? field[winner[0]] : null;
  };

  const onClick = (indexCell) => {
    if (field[indexCell] !== '' || isGameEnded) return;

    const newField = field.map((cell, index) => (index === indexCell ? currentPlayer : cell));

    console.log(newField);
    const winner = checkWinner(newField);

    if (winner) {
      setField(newField);
      setIsGameEnded(true);
      return;
    }

    const isDraw = newField.every((cell) => cell !== '');
    if (isDraw) {
      setField(newField);
      setIsDraw(true);
      setIsGameEnded(true);
      return;
    }

    setField(newField);
    setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
  };

  return (
    <FieldLayout
      field={field}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      clickPlayer={onClick}
    />
  );
};

Field.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  field: PropTypes.arrayOf(PropTypes.oneOf(['X', '0', ''])).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  setIsGameEnded: PropTypes.func.isRequired,
  setField: PropTypes.func.isRequired,
  setIsDraw: PropTypes.func.isRequired,
};
