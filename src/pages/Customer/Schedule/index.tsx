import { Container } from './styles';

import { useContext } from 'react'

import { ScheduleContext } from '../../../context/ScheduleContext';

import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Navigate } from 'react-router-dom';

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

  if (!agenda) {
    return <Navigate to='/cliente/home' />
  } 

  const events: any = [];

  if (Array.isArray(agenda.dias_semana)) {
    agenda.dias_semana.forEach((dia) => {
      const horariosDia = agenda[`horarios_${dia}` as keyof Agenda];
      if (Array.isArray(horariosDia) && horariosDia.length > 0) {
        const dayOfWeek = dia === "dom" ? 0 : dia === "seg" ? 1 : dia === "ter" ? 2 : dia === "qua" ? 3 : dia === "qui" ? 4 : dia === "sex" ? 5 : dia === "sab" ? 6 : -1;

        if (dayOfWeek !== -1) {
          horariosDia.forEach((horario) => {
            events.push({
              id: agenda.id,
              title: "Disponível",
              startTime: horario.split("-")[0], 
              endTime: horario.split("-")[1], 
              daysOfWeek: [dayOfWeek],
              
            });
          });
        }
      }
    });
  }

  

  return (
    <Container>
      <FullCalendar 
        plugins={[ timeGridPlugin  ]}
        initialView='timeGridWeek'
        eventShortHeight={30}
        eventClick={(info: any) => {
          info.jsEvent.preventDefault();
          console.log(new Date(info.event.start))
        }}
        events={events}
      />
    </Container>

  )
}
