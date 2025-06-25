import { FieldLayout } from '../FieldLayout/FieldLayout';
import { store } from '../../store';
import { useState, useEffect } from 'react';

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
  const [_, setForceUpdate] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setForceUpdate((prev) => prev + 1);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const { currentPlayer, initialFiled: field, isGameEnded } = store.getState();

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
      store.dispatch({ type: 'SET_FIELD', payload: newField });
      store.dispatch({ type: 'SET_GAME_ENDED', payload: true });
      return;
    }

    const isDraw = newField.every((cell) => cell !== '');
    if (isDraw) {
      store.dispatch({ type: 'SET_FIELD', payload: newField });
      store.dispatch({ type: 'SET_IS_DRAW', payload: true });
      store.dispatch({ type: 'SET_GAME_ENDED', payload: true });
      return;
    }

    store.dispatch({ type: 'SET_FIELD', payload: newField });
    store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: currentPlayer === 'X' ? '0' : 'X' });

    console.log(newField);
    console.log(currentPlayer);
  };

  return <FieldLayout clickPlayer={onClick} />;
};
