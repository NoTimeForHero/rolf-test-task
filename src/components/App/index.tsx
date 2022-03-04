import React from 'react';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

import styles from './index.module.scss';
import Question from '../Question';
import AddQuestionForm from '../AddQuestionForm';
import { RootState } from '../../store/root';

function App() {
  const questions = useSelector((state: RootState) => state.questions.values);

  return (
    <Container maxWidth="lg" className={styles.app}>
      <div className={styles.header}>Вопросы по автомобилям</div>
      {questions.map((question, index) => <Question question={question} key={index} />)}
      <AddQuestionForm />
    </Container>
  );
}

export default App;
