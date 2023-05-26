import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { BackLink } from '../../components/BackLink';
import { api } from '../../libraries/axios';
import { CompanyType } from '../../types/CompanyType';
import { Form } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';

const validationCompany = yup.object().shape({
  name: yup.string().required('Nome obrigatório!'),
  address: yup.array().of(yup.object().shape({
    street_name: yup.string(),
    number: yup.string(),
    district: yup.string(),
    city: yup.string(),
    state: yup.string()
  })).required('Endereço obrigatório!'),
});

export default function NewCompany() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CompanyType>({ resolver: yupResolver(validationCompany) });

  async function handleCreateCompany(data: FieldValues) {
    try {
      await api.post('/companies', data);

      alert('Empresa cadastrada com sucesso!');

      reset();
    } catch (error) {
      alert('Falha ao cadastrar empresa!');
    }
  }

  return (
    <>
    <BackLink>
      <Link to='/'>
        <img src={arrow} alt="" />
        Voltar
      </Link>
    </BackLink>

    <Form onSubmit={handleSubmit(handleCreateCompany)}>
      <input
        type="text"
        placeholder='Nome'
        {...register('name')}
      />

      <input
        {...register(`address.${0}.street_name`)}
        placeholder="Rua/Avenida"
      />

      <input
        {...register(`address.${0}.number`)}
        placeholder="Número"
      />

      <input
        {...register(`address.${0}.district`)}
        placeholder="Distrito"
      />

      <input
        {...register(`address.${0}.city`)}
        placeholder="Cidade"
      />

      <input
        {...register(`address.${0}.state`)}
        placeholder="Estado"
      />

      <button
        type="submit"
      >
        Cadastrar
      </button>
    </Form>
  </>
  )
}
