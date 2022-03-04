import React from 'react';
import { Alert, Container } from '@mui/material';
import styles from './index.module.scss';
import Question from '../Question';

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

      <div className="App">
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </div>
    </Container>
  );
}

export default App;
