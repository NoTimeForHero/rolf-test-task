/* eslint-disable newline-per-chained-call */
import * as Yup from 'yup';

export type TypeQuestion = {
  name: string,
  email: string,
  carBrand: string,
  carModel: string,
  text: string,
  date?: string,
};

export const QuestionValidation : Yup.SchemaOf<TypeQuestion> = Yup.object({
  name: Yup.string().min(2).max(30).matches(/[а-яА-Я]+/, 'Только русские буквы').required(),
  email: Yup.string().email().required(),
  carBrand: Yup.string().min(4).max(20).matches(/[a-zA-Z]+/, 'Только английские буквы').required(),
  carModel: Yup.string().min(4).max(20).matches(/[a-zA-Z]+/, 'Только английские буквы').required(),
  text: Yup.string().min(1).max(30).matches(/[\Wa-zA-Zа-яА-Я0-9]+/, 'Спецсимволы не разрешены').required(),
  date: Yup.string().notRequired(),
});
// TODO: Брать количество заполненных полей из Yup схемы валидации
export const QuestionValidationRequiredFieldCount = 5;
