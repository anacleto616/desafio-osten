import { useQuery } from "react-query";
import { api } from "../../libraries/axios";
import { CompanyType } from "../../types/CompanyType";

import { Link } from "react-router-dom";
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  const { data: companies } = useQuery<CompanyType[]>('companies', async () => {
    const response = await api.get('/companies')

    return response.data;
  },
  {
    refetchOnWindowFocus: false,
  })

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
                  <Link to={`/edit/${company.id}`}><img src={edit} alt="ícone editar" /></Link>
                </td>
                <td>
                  <button>
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
