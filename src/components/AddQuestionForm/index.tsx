import React, { useMemo, useState } from 'react';
import {
  Button, TextField, CircularProgress, Alert,
} from '@mui/material';
import { useFormik } from 'formik';
import styles from './index.module.scss';
import {
  TypeQuestion, SubmitHandler, QuestionValidation, QuestionValidationRequiredFieldCount,
} from './types';

function AddQuestionForm({
  onSubmit = undefined,
} : {
  onSubmit?: SubmitHandler | undefined,
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);
  const f = useFormik({
    initialValues: {
      name: '', email: '', carMark: '', carModel: '', message: '',
    } as TypeQuestion,
    validationSchema: QuestionValidation,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values: TypeQuestion, { resetForm }) => {
      try {
        setError(null);
        setIsLoading(true);
        await onSubmit?.call(null, values);
        resetForm();
      } catch (ex: any) {
        setError(ex?.toString());
        throw ex;
      } finally {
        setIsLoading(false);
      }
    },
  });
  const canSubmit = useMemo(() => QuestionValidationRequiredFieldCount === Object.values(f.values).filter((x: string) => x.length > 0).length, [f]);
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
        <TextField {...setProps(f.values.carMark, f.errors.carMark, 'carMark', 'Марка авто')} />
        <TextField {...setProps(f.values.carModel, f.errors.carModel, 'carModel', 'Модель авто')} />
      </div>
      <TextField {...setProps(f.values.message, f.errors.message, 'message', 'Текст вопроса')} className={styles.textarea} multiline={true} />
      {isLoading && <div className={styles.spinner}><CircularProgress /></div>}
      {!isLoading && <div className={styles.buttons}>
        <Button type="submit" variant="outlined" color="success" disabled={!canSubmit}>Отправить</Button>
      </div>}
    </form>
  );
}

export default AddQuestionForm;
