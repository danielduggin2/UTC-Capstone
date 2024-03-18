import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import 'src/customCalendarStyles.css';

const localizer = momentLocalizer(moment);

const AppCalendar = ({ events, onSelectEventCallback }) => (
    <div style={{ height: 700 }}>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={onSelectEventCallback}
            style={{ height: '100%', width: '100%' }}
        />
    </div>
);

AppCalendar.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            start: PropTypes.instanceOf(Date).isRequired,
            end: PropTypes.instanceOf(Date).isRequired,
            allDay: PropTypes.bool,
            // Include any other properties that an event object might have
        })
    ).isRequired,
};

export default AppCalendar;
