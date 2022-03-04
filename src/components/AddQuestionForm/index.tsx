import React from 'react';
import { Button, TextField } from '@mui/material';
import styles from './index.module.scss';

function AddQuestionForm() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>Задать вопрос</div>

      <div className={styles.inputGroup}>
        <TextField className={styles.input} label="Имя" size="small" variant="outlined" />
        <TextField className={styles.input} label="EMail" size="small" variant="outlined" />
        <TextField className={styles.input} label="Марка авто" size="small" variant="outlined" />
        <TextField className={styles.input} label="Модель авто" size="small" variant="outlined" />
      </div>
      <TextField className={styles.textarea} label="Текст вопроса" variant="outlined" multiline={true} />
      <div className={styles.buttons}>
        <Button variant="outlined" color="success">Отправить</Button>
      </div>
    </div>
  );
}

export default AddQuestionForm;
