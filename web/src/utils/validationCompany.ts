import * as yup from 'yup';

export const validationCompany = yup.object().shape({
  name: yup.string().required('Nome obrigatório!'),
  address: yup.array().of(yup.object().shape({
    street_name: yup.string().required('Nome da rua obrigatório!'),
    number: yup.string().required('Número obrigatório!'),
    district: yup.string().required('Distrito obrigatório!'),
    city: yup.string().required('Cidade obrigatório!'),
    state: yup.string().required('Estado obrigatório!')
  }))
});