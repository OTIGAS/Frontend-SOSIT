import { Container } from './styles';

import { formatarHorario } from '../../../hooks/useFormatTime';

interface Disponibilidade {
  inicio: string[];
  fim: string[];
}

export function ScheduleCustomer() {   

  const horariosDoDia = [
    '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00'
  ];
  
  const diasDisponiveis: string[] = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

  const disponibilidade: Record<string, Disponibilidade> = {
    seg: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    },
    ter: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    },
    qua: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    },
    qui: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    },
    sex: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    },
    sab: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    },
    dom: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    },
  };
  
  const diasAgendadis = ['ter', 'qua', 'qui']
  const horariosInicioAgendados: string[] = ['08:00', '15:30', '17:00']
  const horariosFimAgendados: string[] = ['09:30', '16:30', '18:00']

  return (
    <Container>
      <strong></strong>
      <strong></strong>
      <strong className='diaSegunda'>05</strong>
      <strong className='diaTerca'>06</strong>
      <strong className='diaQuarta'>07</strong>
      <strong className='diaQuinta'>08</strong>
      <strong className='diaSexta'>09</strong>
      <strong className='diaSabado'>10</strong>
      <strong className='diaDomingo'>11</strong>
      <strong className='segunda'>Segunda</strong>
      <strong className='terca'>Terça</strong>
      <strong className='quarta'>Quarta</strong>
      <strong className='quinta'>Quinta</strong>
      <strong className='sexta'>Sexta</strong>
      <strong className='sabado'>Sabado</strong>
      <strong className='domingo'>Domingo</strong>
      <strong className='seis'>06:00</strong>
      <strong className='seisMeia'>06:30</strong>
      <strong className='sete'>07:00</strong>
      <strong className='seteMeia'>07:30</strong>
      <strong className='oito'>08:00</strong>
      <strong className='oitoMeia'>08:30</strong>
      <strong className='nove'>09:00</strong>
      <strong className='noveMeia'>09:30</strong>
      <strong className='dez'>10:00</strong>
      <strong className='dezMeia'>10:30</strong>
      <strong className='onze'>11:00</strong>
      <strong className='onzeMeia'>11:30</strong>
      <strong className='doze'>12:00</strong>
      <strong className='dozeMeia'>12:30</strong>
      <strong className='treze'>13:00</strong>
      <strong className='trezeMeia'>13:30</strong>
      <strong className='quatorze'>14:00</strong>
      <strong className='quatorzeMeia'>14:30</strong>
      <strong className='quinze'>15:00</strong>
      <strong className='quinzeMeia'>15:30</strong>
      <strong className='dezesseis'>16:00</strong>
      <strong className='dezesseisMeia'>16:30</strong>
      <strong className='dezessete'>17:00</strong>
      <strong className='dezesseteMeia'>17:30</strong>
      <strong className='dezoito'>18:00</strong>

      {
  horariosDoDia.map((horario) => {
    return diasDisponiveis.map((dia) => {
      // Validating if the day is available for scheduling
      const validacaoDia = disponibilidade[dia];
  
      if (validacaoDia) {
        // Validating if the time slot is available for scheduling
        const validacaoHorario = validacaoDia.inicio.includes(horario);
  
        if (validacaoHorario) {
          // Validating if there is an appointment scheduled for that day
          const validacaoDiaAgendado = diasAgendadis.includes(dia);
  
          // Validating if there is an appointment starting at that time slot
          const validacaoHorarioInicioAgendado = horariosInicioAgendados.includes(horario);
  
          // Validating if there is an appointment ending at that time slot
          const validacaoHorarioFimAgendado = horariosFimAgendados.includes(horario);
  
          if (validacaoDiaAgendado && validacaoHorarioInicioAgendado) {
            return <strong className={formatarHorario(horario, dia)}>Inicio Marcado</strong>
          } else if (validacaoDiaAgendado && validacaoHorarioFimAgendado) {
            return <strong className={formatarHorario(horario, dia)}>Fim Marcado</strong>
          } else {
            return <strong className={formatarHorario(horario, dia)}>Disponivel</strong>
          }
        } else {
          return <strong>vazio</strong>
        }
      } else {
        return <strong>vazio</strong>
      }
    })    
  })
}

      
    </Container>
  );
}



