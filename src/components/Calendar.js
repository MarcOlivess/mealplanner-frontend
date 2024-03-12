import React from 'react'
import Day from './Day'

export const Calendar = ({ calendarData, removeFood, addFood }) => {

    return (
        <div id='calendar'>
            <Day day='Monday' data={calendarData.monday} removeFood={removeFood} addFood={addFood} />
            <Day day='Tuesday' data={calendarData.tuesday} removeFood={removeFood} addFood={addFood} />
            <Day day='Wednesday' data={calendarData.wednesday} removeFood={removeFood} addFood={addFood} />
            <Day day='Thursday' data={calendarData.thursday} removeFood={removeFood} addFood={addFood} />
            <Day day='Friday' data={calendarData.friday} removeFood={removeFood} addFood={addFood} />
            <Day day='Saturday' data={calendarData.saturday} removeFood={removeFood} addFood={addFood} />
            <Day day='Sunday' data={calendarData.sunday} removeFood={removeFood} addFood={addFood} />
        </div>
    )
}
