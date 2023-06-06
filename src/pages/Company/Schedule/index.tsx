import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Container } from './styles';

export function Schedule() {

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
        events={[
          { 
            id: '1',
            title: 'The Title',
            start: '2023-06-04T05:00:00',
            end: '2023-06-04T06:00:00', 
          }
        ]}
      />
    </Container>

  )
}

