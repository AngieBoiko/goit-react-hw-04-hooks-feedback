import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export default function Notification({ totalFeedbacks }) {
  if (!totalFeedbacks) {
    return <p className={styles.item}>No feedback given</p>;
  }
  return <></>;
}
Notification.propTypes = {
  totalFeedbacks: PropTypes.number.isRequired,
};
