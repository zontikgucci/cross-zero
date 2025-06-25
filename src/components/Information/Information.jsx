import { InformationLayout } from '../InformationLayout/InformationLayout';
import { store } from '../../store';
import { useState, useEffect } from 'react';

export const Information = () => {
  const [_, setForceUpdate] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setForceUpdate((prev) => prev + 1);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const { currentPlayer, isGameEnded, isDraw } = store.getState();

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
