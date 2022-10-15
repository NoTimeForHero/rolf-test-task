import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  Button, TextField, CircularProgress, Alert,
} from '@mui/material';
import { useFormik } from 'formik';

import styles from './index.module.scss';
import {
  TypeQuestion, QuestionValidation, QuestionValidationRequiredFieldCount,
} from './types';
import { RootState } from '../../store/root';
import { AddQuestion } from '../../store/questions/thunks';
import { useAppDispatch } from '../../store';

function AddQuestionForm() {
  const { isLoading, error } = useSelector((state: RootState) => state.questions);
  const dispatch = useAppDispatch();
  const f = useFormik({
    initialValues: {
      name: '', text: '', email: '', carBrand: '', carModel: '',
    } as TypeQuestion,
    validationSchema: QuestionValidation,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values: TypeQuestion, { resetForm }) => {
      await dispatch(AddQuestion(values)).unwrap();
      resetForm();
    },
  });
  // noinspection PointlessBooleanExpressionJS
  const canSubmit = useMemo(() => true || QuestionValidationRequiredFieldCount
    === Object.values(f.values).filter((x: string) => x.length > 0).length, [f]);
  const setProps = (valueKey: string | undefined, errorKey: string | undefined, name: string, label: string) => ({
    name,
    label,
    value: valueKey,
    error: (errorKey?.length ?? 0) > 0,
    helperText: errorKey,
    onChange: f.handleChange,
    // https://stackoverflow.com/a/55684640
    size: 'small' as any,
    variant: 'outlined' as any,
    className: styles.input,
  });
  return (
    <form className={styles.root} onSubmit={f.handleSubmit}>
      {error && <Alert severity="error">{error}</Alert> }
      <div className={styles.header}>Задать вопрос</div>
      <div className={styles.inputGroup}>
        <TextField {...setProps(f.values.name, f.errors.name, 'name', 'Имя')} />
        <TextField {...setProps(f.values.email, f.errors.email, 'email', 'EMail')} />
        <TextField {...setProps(f.values.carBrand, f.errors.carBrand, 'carBrand', 'Марка авто')} />
        <TextField {...setProps(f.values.carModel, f.errors.carModel, 'carModel', 'Модель авто')} />
      </div>
      <TextField {...setProps(f.values.text, f.errors.text, 'text', 'Текст вопроса')} className={styles.textarea} multiline={true} />
      {isLoading && <div className={styles.spinner}><CircularProgress /></div>}
      {!isLoading && <div className={styles.buttons}>
        <Button type="submit" variant="outlined" color="success" disabled={!canSubmit}>Отправить</Button>
      </div>}
    </form>
  );
}

export default AddQuestionForm;
