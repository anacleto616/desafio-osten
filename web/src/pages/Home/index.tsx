import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { api } from "../../libraries/axios";
import { CompanyType } from "../../types/CompanyType";

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  const { data: companies, refetch } = useQuery<CompanyType[]>('companies', async () => {
    const response = await api.get('/companies')

    return response.data;
  },
  {
    refetchOnWindowFocus: true,
    staleTime: 0,
    cacheTime: 0,
    refetchInterval: 0,
  })


  async function handleDeleteCompany(id: string) {
    const beDeleted = confirm('Deseja realmente excluir esta empresa?');

    if (beDeleted) {
      await api.delete(`/companies/${id}`);
      alert('Empresa excluída com sucesso!');
      refetch
      return;
    }

    return;
  }

  return (
      <div className="container">
        <Link to='new'>Nova Empresa</Link>
        <table>
          <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Rua/Avenida</th>
                <th>Número</th>
                <th>Distrito</th>
                <th>Cidade</th>
                <th>Estado</th>
              </tr>
          </thead>
          <tbody>
            {companies && companies?.map(company => (
              <tr key={company.id}>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.address[0].street_name}</td>
                <td>{company.address[0].number}</td>
                <td>{company.address[0].district}</td>
                <td>{company.address[0].city}</td>
                <td>{company.address[0].state}</td>
                <td>
                  <Link to={`/edit/${company.id}`}><img src={edit} alt="ícone editar" /></Link>
                </td>
                <td>
                  <button onClick={() => handleDeleteCompany(String(company.id))}>
                    <img src={trash} alt="ícone deletar" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}
