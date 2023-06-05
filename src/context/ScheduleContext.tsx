import React, { createContext, useContext, useState } from 'react';

interface Agenda {
  id: string;
  servico: string;
  descricao: string;
  company_id: string;
  nome: string;
  dias_semana: string[];
}

interface ScheduleProps {
  agenda: Agenda | undefined;
  setAgenda: React.Dispatch<React.SetStateAction<Agenda | undefined>>;
}

export const ScheduleContext = createContext<ScheduleProps>({
  agenda: undefined,
  setAgenda: () => {}
});

export function ScheduleStorage({ children }: { children: React.ReactNode }) {
  const [agenda, setAgenda] = useState<Agenda | undefined>(undefined);

  return (
    <ScheduleContext.Provider value={{ agenda, setAgenda }}>
      {children}
    </ScheduleContext.Provider>
  );
}
