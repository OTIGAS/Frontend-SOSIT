import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

import { Container } from './styles';

import { useContext, useEffect, useState } from 'react'

import { ScheduleContext } from '../../../context/ScheduleContext';

import { Navigate } from 'react-router-dom';
import { HISTORY_COMMITMENTS_SCHEDULE } from '../../../api/schedules';

interface Agenda {
  company_id: string;
  criado_em?: string;
  descricao: string;
  dias_semana: string[];
  horarios_qua?: string[];
  horarios_qui?: string[];
  horarios_sab?: string[];
  horarios_seg?: string[];
  horarios_sex?: string[];
  horarios_ter?: string[];
  id: string;
  nome: string;
  servico: string;
}

export function ScheduleCustomer() {

  const { agenda } = useContext(ScheduleContext) as { agenda: Agenda };

  const [commitments, setCommitments] = useState()

  const token = window.localStorage.getItem('token');

  const events: any = [];

  useEffect(() => {
    function executeOnce() {
      if (token && agenda) {
        (async () => {
          const {url, options} = HISTORY_COMMITMENTS_SCHEDULE(token, agenda.id);
          const response = await fetch(url, options);
          const json = await response.json();
          setCommitments(json.commitments)
        })();
      }
      if (!agenda) {
        return <Navigate to='/cliente/home' />;
      }
      if (Array.isArray(agenda.dias_semana)) {
        agenda.dias_semana.forEach((dia) => {
          const horariosDia = agenda[`horarios_${dia}` as keyof Agenda];
          if (Array.isArray(horariosDia) && horariosDia.length > 0) {
            const dayOfWeek =
              dia === 'dom'
                ? 0
                : dia === 'seg'
                ? 1
                : dia === 'ter'
                ? 2
                : dia === 'qua'
                ? 3
                : dia === 'qui'
                ? 4
                : dia === 'sex'
                ? 5
                : dia === 'sab'
                ? 6
                : -1;

            if (dayOfWeek !== -1) {
              horariosDia.forEach((horario) => {
                events.push({
                  id: agenda.id,
                  title: 'Disponível',
                  startTime: horario.split('-')[0],
                  endTime: horario.split('-')[1],
                  daysOfWeek: [dayOfWeek],
                });
              });
            }
          }
        });
      }
      if (commitments) {
        (commitments as any[]).forEach((commitment: any) => { // Adicionado o tipo 'any[]'
          events.push({
            id: commitment.id,
            title: 'Ocupado',
            start: commitment.start_date_time,
            end: commitment.end_date_time,
            classNames: ['meu-evento-personalizado'],
          });
        });
      }
    }
    executeOnce();
  }, []);

  return (
    <Container>
      <FullCalendar 
        plugins={[ timeGridPlugin  ]}
        initialView='timeGridWeek'
        locale={ptBrLocale}
        hiddenDays={[0]}
        eventShortHeight={30}
        eventClick={(info: any) => {
          info.jsEvent.preventDefault();
          console.log(info.event);
        }}
        events={events}
      />
    </Container>

  )
}
