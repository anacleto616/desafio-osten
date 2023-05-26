import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { api } from "../../libraries/axios";
import { CompanyType } from "../../types/CompanyType";

import details from '../../assets/images/icons/details.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import { Tooltip } from 'react-tooltip';

import { Container } from "./styles";

export default function Home() {
  const { data: companies, refetch } = useQuery<CompanyType[]>('companies', async () => {
    const response = await api.get('/companies')

    return response.data;
  },
  {
    refetchOnWindowFocus: true,
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
      <Container>
        <Link to='new' className="newCompany">Nova Empresa</Link>
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
            {companies?.map(company => (
              <tr key={company.id}>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.address[0].street_name}</td>
                <td>{company.address[0].number}</td>
                <td>{company.address[0].district}</td>
                <td>{company.address[0].city}</td>
                <td>{company.address[0].state}</td>
                <td>
                  <Link
                    to={`/details/${company.id}`}
                    data-tooltip-id="details"
                    data-tooltip-content="Detalhes da empresa"
                    data-tooltip-place="top"
                  >
                    <img src={details} alt="ícone detalhes" />
                  </Link>
                </td>
                <td>
                  <Link 
                    to={`/edit/${company.id}`}
                    data-tooltip-id="edit"
                    data-tooltip-content="Editar empresa"
                    data-tooltip-place="top"
                  >
                    <img src={edit} alt="ícone editar" />
                  </Link>
                </td>
                <td>
                  <button 
                    onClick={() => handleDeleteCompany(String(company.id))}
                    data-tooltip-id="delete"
                    data-tooltip-content="Deletar empresa"
                    data-tooltip-place="top"
                  >
                    <img src={trash} alt="ícone deletar" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Tooltip id="details"/>
        <Tooltip id="edit"/>
        <Tooltip id="delete"/>
      </Container>
  );
}
