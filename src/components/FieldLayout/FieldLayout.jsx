import styles from './FieldLayout.module.css';
import { store } from '../../store';

export const FieldLayout = ({ clickPlayer }) => {
  const { initialFiled } = store.getState();

  return (
    <div className={styles.field}>
      {initialFiled.map((item, i) => (
        <button className={styles.fieldButton} key={i} onClick={() => clickPlayer(i)}>
          {item}
        </button>
      ))}
    </div>
  );
};
