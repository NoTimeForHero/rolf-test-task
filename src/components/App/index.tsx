import React from 'react';
import { Container } from '@mui/material';
import styles from './index.module.scss';
import Question from '../Question';
import AddQuestionForm from '../AddQuestionForm';

function App() {
  const queProps = {
    userName: 'Павел Дуров',
    carName: 'Bugatti Veyron',
    date: '01.01.2001 19:00',
    message: 'Hello world!',
  };

  return (
    <Container maxWidth="lg" className={styles.app}>
      <div className={styles.header}>Вопросы по автомобилям</div>
      <Question {...queProps} />
      <Question {...queProps} />
      <Question {...queProps} />
      <AddQuestionForm />
    </Container>
  );
}

export default App;
