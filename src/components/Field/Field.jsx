import { FieldLayout } from '../FieldLayout/FieldLayout';
import { useSelector, useDispatch } from 'react-redux';
import { selectField, selectPlayer, selectIsGameEnded } from '../../selectors';
import { updateField, gameEnded, draw, player } from '../../actions';

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const Field = () => {
  const dispatch = useDispatch();

  const field = useSelector(selectField);
  const currentPlayer = useSelector(selectPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);

  const checkWinner = (currentField) => {
    const winner = WIN_PATTERNS.find(
      ([a, b, c]) =>
        currentField[a] !== '' && currentField[a] === currentField[b] && currentField[a] === currentField[c],
    );
    return winner ? currentField[winner[0]] : null;
  };

  const onClick = (indexCell) => {
    if (field[indexCell] !== '' || isGameEnded) return;

    const newField = field.map((cell, index) => (index === indexCell ? currentPlayer : cell));

    const winner = checkWinner(newField);

    if (winner) {
      dispatch(updateField(newField));
      dispatch(gameEnded(true));
      return;
    }

    const isDraw = newField.every((cell) => cell !== '');
    if (isDraw) {
      dispatch(updateField(newField));
      dispatch(draw(true));
      dispatch(gameEnded(true));
      return;
    }

    dispatch(updateField(newField));
    dispatch(player(currentPlayer === 'X' ? '0' : 'X'));
  };

  return <FieldLayout clickPlayer={onClick} />;
};
