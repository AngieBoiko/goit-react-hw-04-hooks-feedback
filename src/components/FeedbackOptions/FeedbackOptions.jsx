import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const btnItems = [
  { id: 1, name: 'Good' },
  { id: 2, name: 'Neutral' },
  { id: 3, name: 'Bad' },
];
export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <ul className={styles.btnList}>
      {btnItems.map(item => (
        <li key={item.id}>
          <button
            type="button"
            onClick={onLeaveFeedback}
            className={styles.btnItem}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
