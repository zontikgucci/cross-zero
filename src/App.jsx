import { useState } from 'react';
import { AppLayout } from './AppLayout';

const initialFiled = Array(9).fill('');

export const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(initialFiled);

  const reset = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(initialFiled);
  };

  return (
    <AppLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      field={field}
      setCurrentPlayer={setCurrentPlayer}
      setIsGameEnded={setIsGameEnded}
      setIsDraw={setIsDraw}
      setField={setField}
      reset={reset}
    />
  );
};
