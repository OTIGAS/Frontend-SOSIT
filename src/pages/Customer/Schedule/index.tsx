import { Container } from './styles';

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

    const diasSemana = ['2023-06-05','2023-06-06','2023-06-07','2023-06-08','2023-06-09','2023-06-10', '2023-06-11'];

    const disponibilidade: Record<string, Disponibilidade> = {
    seg: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['06:59', '07:59', '08:59', '09:59', '10:59', '11:59', '12:59', '13:59', '14:59', '15:59', '16:59', '18:00'],
    },
    ter: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['06:59', '07:59', '08:59', '09:59', '10:59', '11:59', '12:59', '13:59', '14:59', '15:59', '16:59', '18:00'],
    },
    qua: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['06:59', '07:59', '08:59', '09:59', '10:59', '11:59', '12:59', '13:59', '14:59', '15:59', '16:59', '18:00'],
    },
    qui: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['06:59', '07:59', '08:59', '09:59', '10:59', '11:59', '12:59', '13:59', '14:59', '15:59', '16:59', '18:00'],
    },
    sex: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['06:59', '07:59', '08:59', '09:59', '10:59', '11:59', '12:59', '13:59', '14:59', '15:59', '16:59', '18:00'],
    },
    sab: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['06:59', '07:59', '08:59', '09:59', '10:59', '11:59', '12:59', '13:59', '14:59', '15:59', '16:59', '18:00'],
    },
    dom: {
        inicio: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
        fim: ['06:59', '07:59', '08:59', '09:59', '10:59', '11:59', '12:59', '13:59', '14:59', '15:59', '16:59', '18:00'],
    },
    };

    const diasDisponiveis: string[] = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];

    const idUsuario = '01'
    const diaAgendado = '2023-06-07';
    const horarioInicioAgendado = '13:00';
    const horarioFimAgendado = '16:00';

  return (
    <Container>
      <table>
        <thead>
            <tr>
                <th></th>
                <th>
                    05
                </th>
                <th>
                    06
                </th>
                <th>
                    07
                </th>
                <th>
                    08
                </th>
                <th>
                    09
                </th>
                <th>
                    10
                </th>
                <th></th>
            </tr>
          <tr>
            <th>Horario</th>
            <th>Segunda</th>
            <th>Terça</th>
            <th>Quarta</th>
            <th>Quinta</th>
            <th>Sexta</th>
            <th>Sábado</th>
            <th>Domingo</th>
          </tr>
        </thead>
        <tbody>
          {horariosDoDia.map((horario) => (
            <tr key={horario}>
              <td>{horario}</td>
              {diasSemana.map((dia) => {
                const index = diasSemana.findIndex((item) => item === dia);
                const day = index === 0 ? 'seg' : index === 1 ? 'ter' : index === 2 ? 'qua' : index === 3 ? 'qui' : index === 4 ? 'sex' : index === 5 ? 'sab' : 'dom';

                console.log(disponibilidade[day].inicio, horarioInicioAgendado)

                return dia === diaAgendado ? (
                    disponibilidade[day].inicio.map((horarioInicio) => {
                        horarioInicio === horarioInicioAgendado ? (
                            <td className='inicio'>Marcado</td>
                        ) 
                        : (
                            <td>Disponivel</td>
                        )
                    })
                ) : (
                    <td>false</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}


