/* eslint-disable newline-per-chained-call */
import React, { useMemo } from 'react';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './index.module.scss';
import yup_locale_ru from '../../utils/yup_locale_ru';

Yup.setLocale(yup_locale_ru);

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(30).matches(/[а-яА-Я]+/, 'Только русские буквы').required(),
  email: Yup.string().email().required(),
  carMark: Yup.string().min(4).max(20).matches(/[a-zA-Z]+/, 'Только английские буквы').required(),
  carModel: Yup.string().min(4).max(20).matches(/[a-zA-Z]+/, 'Только английские буквы').required(),
  message: Yup.string().min(1).max(30).matches(/[\Wa-zA-Zа-яА-Я0-9]+/, 'Спецсимволы не разрешены').required(),
});

function AddQuestionForm() {
  const f = useFormik({
    initialValues: {
      name: '', email: '', carMark: '', carModel: '', message: 'asdasd',
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 100);
    },
  });
  const canSubmit = useMemo(() => Object.keys(validationSchema.fields).length === Object.values(f.values).filter((x: string) => x.length > 0).length, [f]);
  const setProps = (key: string | undefined, name: string, label: string) => ({
    name,
    label,
    error: (key?.length ?? 0) > 0,
    helperText: key,
    onChange: f.handleChange,
    // https://stackoverflow.com/a/55684640
    size: 'small' as any,
    variant: 'outlined' as any,
    className: styles.input,
  });
  return (
    <form className={styles.root} onSubmit={f.handleSubmit}>
      <div className={styles.header}>Задать вопрос</div>
      <div className={styles.inputGroup}>
        <TextField {...setProps(f.errors.name, 'name', 'Имя')} />
        <TextField {...setProps(f.errors.email, 'email', 'EMail')} />
        <TextField {...setProps(f.errors.carMark, 'carMark', 'Марка авто')} />
        <TextField {...setProps(f.errors.carModel, 'carModel', 'Модель авто')} />
      </div>
      <TextField {...setProps(f.errors.message, 'message', 'Текст вопроса')} className={styles.textarea} multiline={true} />
      <div className={styles.buttons}>
        <Button type="submit" variant="outlined" color="success" disabled={!canSubmit}>Отправить</Button>
      </div>
    </form>
  );
}

export default AddQuestionForm;
