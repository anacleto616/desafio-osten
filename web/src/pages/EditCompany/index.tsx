import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BackLink } from '../../components/BackLink';
import { api } from '../../libraries/axios';
import { CompanyType } from '../../types/CompanyType';
import { Form } from './styles';

import { useEffect, useState } from 'react';
import arrow from '../../assets/images/icons/arrow.svg';
import { states } from '../../utils/states';
import { validationCompany } from '../../utils/validationCompany';

export default function EditCompany() {
  const [company, setCompany] = useState<CompanyType>()

  const { id } = useParams();
  const navigate = useNavigate();

  const statesOk = states.filter(state => state !== company?.address[0].state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyType>({ resolver: yupResolver(validationCompany) });

  async function handleGetCompany() {
    const response = await api.get(`/companies/${id}`);

     setCompany(response.data);
  }

  async function handleUpdateCompany(data: FieldValues) {
    try {
      await api.put(`/companies/${id}`, data);

      alert('Empresa atualizada com sucesso!');
      navigate('/');
    } catch (error) {
      alert('Falha ao atualizar empresa!');
    }
  }

  useEffect(() => {
    handleGetCompany()
  })

  return (
    <>
    <BackLink>
      <Link to='/'>
        <img src={arrow} alt="" />
        Voltar
      </Link>
    </BackLink>

    <Form onSubmit={handleSubmit(handleUpdateCompany)}>
      <input
        type="text"
        placeholder='Nome'
        {...register('name')}
        defaultValue={company?.name}
      />
      <p>{errors.name?.message}</p>

      <input
        type="text"
        placeholder="Rua/Avenida"
        {...register(`address.${0}.street_name`)}
        defaultValue={company?.address[0].street_name}
        />
      <p>{errors?.['address']?.[0]?.street_name?.message}</p>

      <input
        type="text"
        placeholder="Número"
        {...register(`address.${0}.number`)}
        defaultValue={company?.address[0].number}
        />
      <p>{errors?.['address']?.[0]?.number?.message}</p>

      <input
        type="text"
        placeholder="Distrito"
        {...register(`address.${0}.district`)}
        defaultValue={company?.address[0].district}
        />
      <p>{errors?.['address']?.[0]?.district?.message}</p>

      <input
        type="text"
        placeholder="Cidade"
        {...register(`address.${0}.city`)}
        defaultValue={company?.address[0].city}
        />
      <p>{errors?.['address']?.[0]?.city?.message}</p>

      <select {...register(`address.${0}.state`)}>
          <option value="">-- Estado --</option>
          <option value={company?.address[0].state} selected>{company?.address[0].state}</option>
          {statesOk.map((state) => (
            <option value={state}>{state}</option>
          ))}
      </select>
      <p>{errors?.['address']?.[0]?.state?.message}</p>

      <button
        type="submit"
        >
        Atualizar
      </button>
    </Form>
  </>
  )
}
