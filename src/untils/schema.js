import * as yup from 'yup';

export const schema = yup.object({
    text: yup.string()
    .required('Поле нужно заполнить!')
    .min(10, 'Введите больше 10 символов')
    .max(225,'Максимальное значение 225 символов'),
    status: yup.string()
    .required('Поле нужно заполнить!')
    .notOneOf(['']),
    date: yup.string()
    .required('Поле нужно заполнить!')
})