import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { api } from '../../libraries/axios';
import { CompanyType } from '../../types/CompanyType';

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
    <form onSubmit={handleSubmit(handleCreateCompany)}>
      <div>
        <label >Nome da Empresa:</label>
        <input
          type="text"
          {...register('name')}
        />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label>Rua/Avenida:</label>
        <input
          {...register(`address.${0}.street_name`)}
          placeholder="Rua/Avenida"
        />
      </div>
      <div>
        <label>Número:</label>
        <input
          {...register(`address.${0}.number`)}
          placeholder="número"
        />
      </div>
      <div>
        <label>Distrito:</label>
        <input
          {...register(`address.${0}.district`)}
          placeholder="Distrito"
        />
      </div>
      <div>
        <label>Cidade:</label>
        <input
          {...register(`address.${0}.city`)}
          placeholder="Cidade"
        />
      </div>
      <div>
        <label>Estado:</label>
        <input
          {...register(`address.${0}.state`)}
          placeholder="Estado"
        />
      </div>
      <div>
        <button
          type="submit"
        >
          Cadastrar Empresa
        </button>
      </div>
    </form>
  )
}
