import PropTypes from 'prop-types';
import styles from './InformationLayout.module.css';

export const InformationLayout = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

InformationLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
