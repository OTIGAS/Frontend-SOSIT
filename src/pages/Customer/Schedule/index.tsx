import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

import { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import { ScheduleContext } from '../../../context/ScheduleContext';

import { CREATE_COMMITMENT, HISTORY_COMMITMENTS_SCHEDULE } from '../../../api/schedules';

import Swal from 'sweetalert2';
import { format } from 'date-fns';

const WEEK_DAYS = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']

const fixDate = (curr: string) => {
  var date = new Date(curr);
  date.setHours(date.getHours() + 3);

  return date;
}

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

  const { agenda } = useContext(ScheduleContext) as { agenda: Agenda, loading: Boolean };

  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<any[]>([]);

  const token = window.localStorage.getItem('token');

  async function handleEventClick(dataI: Date, dateE: Date) {
    const inicio = format(dataI, "yyyy-MM-dd'T'HH:mm:ss");
    const fim = format(dateE, "yyyy-MM-dd'T'HH:mm:ss");

    if (token && inicio && fim) {
      const { url, options } = CREATE_COMMITMENT(inicio, fim, agenda.id, token);
      const response = await fetch(url, options);
      if (response.status === 201) {
        navigate('/cliente/home');
      }
    }
  }

  async function seachCommitments(token: string) {
    const { url, options } = HISTORY_COMMITMENTS_SCHEDULE(token, agenda.id);
    await fetch(url, options)
      .then(response => response.json())
      .then(({ commitments }) => {
        commitments.forEach((commitment: any) => {
          setEvents((prev) => [...prev, {
            id: commitment.id,
            title: 'Ocupado',
            start: commitment.start_date_time,
            end: commitment.end_date_time,
            className: ["meu-evento-personalizado"],
          }]);
        });
      })
  };

  useEffect(() => {
    async function executeOnce() {
      if (token && agenda) {
        await seachCommitments(token);
      }
      if (Array.isArray(agenda.dias_semana)) {
        agenda.dias_semana.forEach((dia) => {
          const horariosDia = agenda[`horarios_${dia}` as keyof Agenda];

          if (Array.isArray(horariosDia) && horariosDia.length > 0) {
            const dayOfWeek = WEEK_DAYS.indexOf(dia);

            if (dayOfWeek !== -1) {
              horariosDia.forEach((horario) => {
                setEvents((prev) => [...prev, {
                  id: agenda.id,
                  title: 'Disponível',
                  startTime: horario.split('-')[0],
                  endTime: horario.split('-')[1],
                  daysOfWeek: [dayOfWeek],
                }]);
              });
            }
          }
        });
      }

      setIsLoading(false)
    }

    executeOnce();

  }, []);

  if (isLoading) {
    return <>LOADING...</>
  }

  console.log("ok")
  console.log({ events })

  return (
    <Container>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView='timeGridWeek'
        locale={ptBrLocale}
        hiddenDays={[0]}
        eventShortHeight={30}
        eventClick={(info: any) => {
          info.jsEvent.preventDefault();
          console.log(info.event.title)
          const dataI = info.event.start;
          const dataE = info.event.end;
          const dia = dataI.getDate();
          const horarioInicio = `${dataI.getHours()}:${dataI.getMinutes()}:${dataI.getSeconds()}`;
          const horarioFim = `${dataE.getHours()}:${dataE.getMinutes()}:${dataE.getSeconds()}`;
          Swal.fire({
            title: 'Agendamento de Compromisso',
            text: "Dia " + dia + " das " + horarioInicio + "h as " + horarioFim + "h",
            icon: 'question',
            iconColor: '#ff735c',
            confirmButtonColor: '#32CD32',
            confirmButtonText: 'Confirmar'
          }).then((result) => {
            if(info.event.title === "Disponível"){
              if (result.isConfirmed) {
                handleEventClick(fixDate(dataI), fixDate(dataE));
              }
            }else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Horário Ocupado',
              })
            }
          })
        }}
        events={events}
      />
    </Container>

  )
}