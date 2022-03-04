import React from 'react';
import styles from './index.module.scss';

function Question({
  userName, carName, date, message,
} : {
  userName: string, carName: string, date: string, message: string
}) {
  return (
      <div className={styles.root}>
        <div className={styles.header}>
          <span>{userName}</span>
          <span className={styles.addInfo}>{carName}</span>
        </div>
        <div className={styles.datetime}>{date}</div>
        <div className={styles.message}>{message}</div>
      </div>
  );
}

export default Question;
