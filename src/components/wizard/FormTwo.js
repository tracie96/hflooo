import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function FormTwo({ event }) {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
