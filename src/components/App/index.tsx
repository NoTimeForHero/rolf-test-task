/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Container } from '@mui/material';
import { List } from 'immutable';

import styles from './index.module.scss';
import Question from '../Question';
import AddQuestionForm from '../AddQuestionForm';
import { TypeQuestion } from '../AddQuestionForm/types';

// eslint-disable-next-line max-len
const testMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function App() {
  const [questions, setQuestions] = useState<TypeQuestion[]>([
    { name: 'Александра', email: '', carMark: 'Volkswagen', carModel: 'Polo IV', message: testMessage },
    { name: 'Евгений', email: '', carMark: 'Hyundai', carModel: 'Creta', message: testMessage },
    { name: 'Павел', email: '', carMark: 'Mitsubishi', carModel: 'Pajero', message: testMessage },
  ]);

  const addQuestion = async (question: TypeQuestion) => {
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setQuestions(List(questions).push(question).toArray());
  };

  return (
    <Container maxWidth="lg" className={styles.app}>
      <div className={styles.header}>Вопросы по автомобилям</div>
      {questions.map((question, index) => <Question question={question} key={index} />)}
      <AddQuestionForm onSubmit={addQuestion} />
    </Container>
  );
}

export default App;
