import React from 'react'
import Day from './Day'

export const Calendar = ({ calendarData, removeFood, addFood }) => {

    return (
        <div id='calendar'>
            <Day day='MONDAY' data={calendarData.monday} removeFood={removeFood} addFood={addFood} mealIds={[1, 2, 3]} />
            <Day day='TUESDAY' data={calendarData.tuesday} removeFood={removeFood} addFood={addFood} mealIds={[4, 5, 6]} />
            <Day day='WEDNESDAY' data={calendarData.wednesday} removeFood={removeFood} addFood={addFood} mealIds={[7, 8, 9]} />
            <Day day='THURSDAY' data={calendarData.thursday} removeFood={removeFood} addFood={addFood} mealIds={[10, 11, 12]} />
            <Day day='FRIDAY' data={calendarData.friday} removeFood={removeFood} addFood={addFood} mealIds={[13, 14, 15]} />
            <Day day='SATURDAY' data={calendarData.saturday} removeFood={removeFood} addFood={addFood} mealIds={[16, 17, 18]} />
            <Day day='SUNDAY' data={calendarData.sunday} removeFood={removeFood} addFood={addFood} mealIds={[19, 20, 21]} />
        </div>
    )
}
