import React from 'react';
import styles from './index.module.scss';
import { TypeQuestion } from '../AddQuestionForm/types';

function Question({ question } : { question: TypeQuestion }) {
  return (
      <div className={styles.root}>
        <div className={styles.header}>
          <span>{question.name}</span>
          <span className={styles.addInfo}>{question.carBrand} {question.carModel}</span>
        </div>
        <div className={styles.datetime}>{question.date}</div>
        <div className={styles.message}>{question.text}</div>
      </div>
  );
}

export default Question;
