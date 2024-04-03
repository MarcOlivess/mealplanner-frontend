import React from 'react'
import Day from './Day'

export const Calendar = ({ calendarData, removeFood, addFood }) => {

    return (
        <div id='calendar'>
            <Day day='MONDAY' data={calendarData.monday} removeFood={removeFood} addFood={addFood} />
            <Day day='TUESDAY' data={calendarData.tuesday} removeFood={removeFood} addFood={addFood} />
            <Day day='WEDNESDAY' data={calendarData.wednesday} removeFood={removeFood} addFood={addFood} />
            <Day day='THURSDAY' data={calendarData.thursday} removeFood={removeFood} addFood={addFood} />
            <Day day='FRIDAY' data={calendarData.friday} removeFood={removeFood} addFood={addFood} />
            <Day day='SATURDAY' data={calendarData.saturday} removeFood={removeFood} addFood={addFood} />
            <Day day='SUNDAY' data={calendarData.sunday} removeFood={removeFood} addFood={addFood} />
        </div>
    )
}
