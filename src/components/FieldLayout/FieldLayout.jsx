import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css';

export const FieldLayout = ({ field, clickPlayer }) => {
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

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.oneOf(['X', '0', ''])).isRequired,
  clickPlayer: PropTypes.func.isRequired,
};
