import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { ScheduleContext } from "../../../context/ScheduleContext";

interface Company {
  id: string,
  nome_fantasia: string,
  razao_social: string,
  email: string,
  senha_hash: string,
  cnpj: string,
  sobre: string,
  img_perfil: string,
  link_google: string,
  telefone: string,
  email_contato: string,
  nome_contato: string,
  cep: string,
  estado: string,
  cidade: string,
  rua: string,
  numero: string,
  banco: string,
  agencia: string,
  digito: string,
  tipo_conta: string,
  conta: string
}

interface Schedule {
  id: string;
  nome: string;
  servico: string;
  descricao: string;
  dias_semana: string[];
  company_id: string;
}

export function ScheduleCompany() {

  const [schedules, setSchedules] = useState<Schedule[] | null>(null);
  const [schedule, setSchedule] = useState<string | null>(null);
  const [history, setHistory] = useState<History[] | null>(null);

  const { data: empresa } = useContext(UserContext) as { data: { company: Company } | any };

  const { searchCompanySchedules } = useContext(ScheduleContext) as {
      searchCompanySchedules: (token: string, data: Company) => Promise<Schedule[] | null>;
  };

  const token = window.localStorage.getItem('token');

  const fetchData = async () => {
      if (token && empresa) {
          const fetchedSchedules = await searchCompanySchedules(token, empresa.company.id);
          setSchedules(fetchedSchedules);
          console.log(schedules)
      }
  };

  useEffect(() => {
    if (token !== '') {
        fetchData();
    }
  }, []);

  return (
    <>
      <div>
        <button></button>
        <button></button>
        <select onChange={(event: any) => setSchedule(event.target.value)}>
            <option value="">Escolha uma agenda</option>
            {schedules?.map((agenda) => (
                <option key={agenda.id} value={agenda.id}>
                    {agenda.nome}
                </option>
            ))}
        </select>
      </div>
    </>
  )
}