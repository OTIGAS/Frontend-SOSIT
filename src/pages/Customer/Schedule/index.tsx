import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

import { useContext, useEffect, useState } from 'react'

import { Navigate, useNavigate } from 'react-router-dom';

import { Container } from './styles';

import { ScheduleContext } from '../../../context/ScheduleContext';

import { CREATE_COMMITMENT, HISTORY_COMMITMENTS_SCHEDULE } from '../../../api/schedules';

import Swal from 'sweetalert2';
import { format } from 'date-fns';

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

  const navigate = useNavigate();

  const { agenda } = useContext(ScheduleContext) as { agenda: Agenda };

  const [commitments, setCommitments] = useState()

  const token = window.localStorage.getItem('token');

  const events: any = [];

  async function handleEventClick(dataI: Date, dateE: Date) {
    const inicio = format(dataI, "yyyy-MM-dd'T'HH:mm:ss");
    const fim = format(dateE, "yyyy-MM-dd'T'HH:mm:ss");
    if (token && inicio && fim) {
      const { url, options } = CREATE_COMMITMENT(inicio, fim, agenda.id, token);
      const response = await fetch(url, options);
      console.log(response);
      if (response.status === 201) {
        navigate('/cliente/home');
      }
    }
  }

  useEffect(() => {
    function executeOnce() {
      if (token && agenda) {
        (async () => {
          const {url, options} = HISTORY_COMMITMENTS_SCHEDULE(token, agenda.id);
          const response = await fetch(url, options);
          const json = await response.json();
          setCommitments(json.commitments)
        });
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
          const dataI = info.event.start;
          const dataE = info.event.end;
          const dia = dataI.getDate();
          const horarioInicio = `${dataI.getHours()}:${dataI.getMinutes()}:${dataI.getSeconds()}`;
          const horarioFim = `${dataE.getHours()}:${dataE.getMinutes()}:${dataE.getSeconds()}`;
          Swal.fire({
            title: 'Agendamento de Compromisso',
            text: "Dia " + dia + " das " + horarioInicio + "h as " + horarioFim + "h",
            icon: 'question',
            iconColor:'#ff735c',
            confirmButtonColor: '#32CD32',
            confirmButtonText: 'Confirmar'
          }).then((result) => {
            if (result.isConfirmed) {
              handleEventClick(dataI, dataE);
            }
          })
        }}
        events={events}
      />
    </Container>

  )
}
