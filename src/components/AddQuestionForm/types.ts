/* eslint-disable newline-per-chained-call */
import * as Yup from 'yup';

export type TypeQuestion = {
  name: string,
  email: string,
  carMark: string,
  carModel: string,
  message: string,
  date?: string,
};

export const QuestionValidation : Yup.SchemaOf<TypeQuestion> = Yup.object({
  name: Yup.string().min(2).max(30).matches(/[а-яА-Я]+/, 'Только русские буквы').required(),
  email: Yup.string().email().required(),
  carMark: Yup.string().min(4).max(20).matches(/[a-zA-Z]+/, 'Только английские буквы').required(),
  carModel: Yup.string().min(4).max(20).matches(/[a-zA-Z]+/, 'Только английские буквы').required(),
  message: Yup.string().min(1).max(30).matches(/[\Wa-zA-Zа-яА-Я0-9]+/, 'Спецсимволы не разрешены').required(),
  date: Yup.string().notRequired(),
});
// TODO: Брать количество заполненных полей из Yup схемы валидации
export const QuestionValidationRequiredFieldCount = 5;
