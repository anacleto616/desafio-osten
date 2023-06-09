import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BackLink } from '../../components/BackLink';
import { api } from '../../libraries/axios';
import { CompanyType } from '../../types/CompanyType';
import { validationCompany } from '../../utils/validationCompany';
import { Form } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import { states } from '../../utils/states';

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
      <p>{errors.name?.message}</p>

      <input
        type="text"
        placeholder="Rua/Avenida"
        {...register(`address.${0}.street_name`)}
        />
      <p>{errors?.['address']?.[0]?.street_name?.message}</p>

      <input
        type="text"
        placeholder="Número"
        {...register(`address.${0}.number`)}
        />
      <p>{errors?.['address']?.[0]?.number?.message}</p>

      <input
        type="text"
        placeholder="Distrito"
        {...register(`address.${0}.district`)}
        />
      <p>{errors?.['address']?.[0]?.district?.message}</p>

      <input
        type="text"
        placeholder="Cidade"
        {...register(`address.${0}.city`)}
        />
      <p>{errors?.['address']?.[0]?.city?.message}</p>
      
      <select {...register(`address.${0}.state`)}>
          <option value="">-- Estado --</option>
          {states.map((state) => (
            <option value={state}>{state}</option>
            ))}
      </select>
      <p>{errors?.['address']?.[0]?.state?.message}</p>

      <button
        type="submit"
      >
        Cadastrar
      </button>
    </Form>
  </>
  )
}
