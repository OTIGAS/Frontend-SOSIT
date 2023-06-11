import React, { createContext, useState } from 'react';
import { GET_ID_COMPANY } from '../api/users';
import { SCHEDULE_POST_SERVICE } from '../api/schedules';

interface Agenda {
  id: string;
  servico: string;
  descricao: string;
  company_id: string;
  nome: string;
  dias_semana: string[];
}

interface Empresa {
  agencia: string;
  banco: string;
  cep: string;
  cidade: string;
  cnpj: string;
  conta: string;
  digito: string;
  email: string;
  email_contato: string;
  estado: string;
  id: string;
  img_perfil: string;
  link_google: string;
  nome_contato: string;
  nome_fantasia: string;
  numero: string;
  razao_social: string;
  rua: string;
  senha_hash: string;
  sobre: string;
  telefone: string;
  tipo_conta: string;
}

interface ScheduleProps {
  agenda: Agenda | null;
  empresa: Empresa | null;
  agendas: Agenda[];
  loading: boolean | null;
  searchSchedule: (token: string, search: string) => Promise<void>;
  searchCompany: (schedule: Agenda) => Promise<void>;
}

export const ScheduleContext = createContext<ScheduleProps>({
  agenda: null,
  empresa: null,
  agendas: [],
  loading: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  searchSchedule: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  searchCompany: async () => {},
});

export function ScheduleStorage({ children }: { children: React.ReactNode }) {
  const [agendas, setAgendas] = useState<Agenda[]>([]);

  const [agenda, setAgenda] = useState<Agenda | null>(null);
  const [empresa, setEmpresa] = useState<Empresa | null>(null);

  const [loading, setLoading] = useState<boolean | null>(null);

  async function searchSchedule(token: string, search: string) {
    setLoading(true);
    if (token) {
      const { url, options } = SCHEDULE_POST_SERVICE({
        query: search
      }, token);
      const response = await fetch(url, options);
      const json = await response.json();
      setAgendas(json.schedules);
    }
    setLoading(false);
  }

  async function searchCompany(schedule: Agenda) {
    setLoading(true);
    if (schedule.company_id) {
      const { url, options } = GET_ID_COMPANY(schedule.company_id);
      const response = await fetch(url, options);
      const json = await response.json();
      setEmpresa(json.company);
      setAgenda(schedule);
    }
    setLoading(false);
  }

  return (
    <ScheduleContext.Provider
      value={{
        agenda,
        empresa,
        agendas,
        loading,
        searchSchedule,
        searchCompany
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}
