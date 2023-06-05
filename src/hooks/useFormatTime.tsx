export function formatarHorario(horario: string, diaSemana: string): string {
    const horariosPossiveis = [
      '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
      '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
      '16:00', '16:30', '17:00', '17:30', '18:00'
    ];
  
    const diasSemanaPossiveis = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'];
  
    const indiceHorario = horariosPossiveis.findIndex(item => item === horario);
    const indiceDiaSemana = diasSemanaPossiveis.findIndex(item => item === diaSemana);
  
    if (indiceHorario === -1 || indiceDiaSemana === -1) {
      throw new Error('Horário ou dia da semana inválidos.');
    }
  
    const horasPorExtenso = [
      'zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove',
      'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete',
      'dezoito'
    ];
  
    const hora = parseInt(horario.split(':')[0]);
    const minutos = parseInt(horario.split(':')[1]);
  
    const horaFormatada = horasPorExtenso[hora] || '';
    const minutosFormatados = minutos === 30 ? 'Meia' : '';
  
    const diaSemanaFormatado = diasSemanaPossiveis[indiceDiaSemana];
  
    return `${horaFormatada}${minutosFormatados}-${diaSemanaFormatado}`;
  }