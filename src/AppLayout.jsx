import styles from './App.module.css';
import { Field, Information } from './components';
import { store } from './store';

export const AppLayout = () => {
  const reset = () => {
    store.dispatch({ type: 'RESET_GAME' });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Игра Крестики-Нолики</h1>
      <Information />
      <Field />
      <button className={styles.resetButton} onClick={reset}>
        Начать заново
      </button>
    </div>
  );
};
