import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function FormTwo({ event }) {
  console.log(event)
  return (
    <div>
      {event.length === 0 ?(<div class="spinner-border text-success" role="status">
  <span class="sr-only"></span>
</div>)
  :(
        <Calendar
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
            )}
    
    </div>
  );
}