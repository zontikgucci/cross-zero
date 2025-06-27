import { useSelector } from 'react-redux';
import styles from './FieldLayout.module.css';
import { selectField } from '../../selectors';

export const FieldLayout = ({ clickPlayer }) => {
  const field = useSelector(selectField);

  return (
    <div className={styles.field}>
      {field.map((item, i) => (
        <button className={styles.fieldButton} key={i} onClick={() => clickPlayer(i)}>
          {item}
        </button>
      ))}
    </div>
  );
};
