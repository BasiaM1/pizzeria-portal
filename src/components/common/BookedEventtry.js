import React from 'react';

import { useParams } from 'react-router-dom';
import FormReservation from './FormReservation';


const BookedEvent = () => {
  let { eventId } = useParams();

  const event = {
    date: '2020-12-04',
    hour: '18:00',
    table: '1',
    duration: '3',
    ppl: '4',
    starters: {
      water: true,
      bread: false,
    },
    phone: '546809225',
    mail: 'halko@o2.pl',
  };


  return (
    <FormReservation title='Event view' label_id='Event id' id={eventId} dateTitle='Event date' hourTitle='Event time' ppl={event.ppl} phone={event.phone} mail={event.mail} displayBtn='none' flag='true' />

  );
};
export default BookedEvent;
