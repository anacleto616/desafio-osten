import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { api } from "../../libraries/axios";
import { CompanyType } from "../../types/CompanyType";

export default function DetailsCompany() {
  const { id } = useParams();

  const { data: company } = useQuery<CompanyType>('companies', async () => {
    const response = await api.get(`/companies/${id}`)

    return response.data;
  },
    {
      refetchOnWindowFocus: true,
      staleTime: 0,
      cacheTime: 0,
      refetchInterval: 0,
    })

  return (
    <div>
      <h2>Detalhes da Empresa</h2>
      <h3>Nome:</h3>
      <span>{company?.name}</span>

      <h3>Endereço:</h3>
      <span>
        {company?.address[0].street_name}, {company?.address[0].number} - {company?.address[0].district} - {company?.address[0].city} - {company?.address[0].state}
      </span>
    </div>
  )
}
