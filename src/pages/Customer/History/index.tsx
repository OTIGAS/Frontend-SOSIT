import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { HistoryContainer } from "./styles";
import { GET_ID_COMPANY } from '../../../api/users';
import { DELETE_COMMITMENTS_SCHEDULE, GET_ID_SCHEDULE, HISTORY_COMMITMENTS_CUSTOMER } from "../../../api/schedules";

interface History extends Commitment {
  idEmpresa: string;
  nomeEmpresa: string;
  telefone: string;
  nomeAgenda: string;
  service: string;
  data: string;
  inicio: string;
  fim: string;
}

interface Commitment {
  id: string;
  customer_id: string;
  schedule_id: string;
  start_date_time: string;
  end_date_time: string;
}

interface Schedule {
  nome: string;
  servico: string;
  descricao: string;
  dias_semana: string[];
  company_id: string;
}

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

export function HistoryCustomer() {
  const [history, setHistory] = useState<History[] | null>(null);

  async function fetchData() {
    const token = window.localStorage.getItem('token');
    if (token) {
      const { url, options } = HISTORY_COMMITMENTS_CUSTOMER(token);
      const response = await fetch(url, options);
      const json = await response.json();
      const commitments: Commitment[] = json.commitments;

      const historyArray: History[] = [];
      for (const commitment of commitments) {
        const { url: scheduleUrl, options: scheduleOptions } = GET_ID_SCHEDULE(token, commitment.schedule_id);
        const scheduleResponse = await fetch(scheduleUrl, scheduleOptions);
        const scheduleJson = await scheduleResponse.json();
        const schedule: Schedule = scheduleJson.schedule;

        const { url: companyUrl, options: companyOptions } = GET_ID_COMPANY(schedule.company_id);
        const companyResponse = await fetch(companyUrl, companyOptions);
        const companyJson = await companyResponse.json();
        const company: Company = companyJson.company;

        const data = format(parseISO(commitment.start_date_time), 'dd/MM/yyyy');
        const inicio = format(parseISO(commitment.start_date_time), 'HH:mm');
        const fim = format(parseISO(commitment.end_date_time), 'HH:mm');

        const historyItem: History = {
          id: commitment.id,
          customer_id: commitment.customer_id,
          schedule_id: commitment.schedule_id,
          start_date_time: commitment.start_date_time,
          end_date_time: commitment.end_date_time,
          idEmpresa: company.id,
          nomeEmpresa: company.nome_fantasia,
          telefone: company.telefone,
          nomeAgenda: schedule.nome,
          service: schedule.servico,
          data: data,
          inicio: inicio,
          fim: fim,
        };

        historyArray.push(historyItem);
      }

      setHistory(historyArray);
    }
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token !== '') {
      fetchData();
    }
  }, []);

  async function handleClick(commitment: Commitment) {
    const token = window.localStorage.getItem('token');
    if (token) {
      const { url, options } = DELETE_COMMITMENTS_SCHEDULE(token, commitment.id);
      const response = await fetch(url, options);
      console.log(response);
      if (response.status === 204) {
        fetchData();
      }
    }
  }

  return (
    <HistoryContainer>
      <table>
        <caption>Histórico de Agendamentos</caption>
        <tr>
          <th>Empresa</th>
          <th>Contato</th>
          <th>Agenda</th>
          <th>Serviço</th>
          <th>Data</th>
          <th>Início</th>
          <th>Fim</th>
        </tr>
        {history?.map((historyItem) => {
          return (
            <tr key={historyItem.id}>
              <td>{historyItem.nomeEmpresa}</td>
              <td>{historyItem.telefone}</td>
              <td>{historyItem.nomeAgenda}</td>
              <td>{historyItem.service}</td>
              <td>{historyItem.data}</td>
              <td>{historyItem.inicio}</td>
              <td>{historyItem.fim}</td>
              <td onClick={() => handleClick(historyItem)}>Desmarcar</td>
            </tr>
          );
        })}
      </table>
    </HistoryContainer>
  );
}