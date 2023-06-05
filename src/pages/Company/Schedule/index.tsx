import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { startOfWeek, addDays, format } from 'date-fns';

const MyCalendar = () => {
  const getStartOfWeek = (dayOfWeek) => {
    const today = new Date();
    const startOfCurrentWeek = startOfWeek(today);
    const startOfDesiredWeek = addDays(startOfCurrentWeek, dayOfWeek - 1);
    return format(startOfDesiredWeek, "yyyy-MM-dd'T'HH:mm:ss");
  };

  const events = [
    {
      id: '1',
      title: 'The Title',
      start: getStartOfWeek(1) || '', // segunda-feira
      end: getStartOfWeek(1) || '', // mesma data de início
    },
  ];

  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridWeek"
      eventShortHeight={30}
      eventClick={(info) => {
        info.jsEvent.preventDefault();
        console.log(new Date(info.event.start));
      }}
      events={events}
    />
  );
};

export default MyCalendar;

