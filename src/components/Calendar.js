import React from 'react'
import Day from './Day'

export const Calendar = ({ calendarData, removeFood, addFood }) => {

    const mondayData = calendarData.filter((meal) => meal.mealDay === "MONDAY");
    const tuesdayData = calendarData.filter((meal) => meal.mealDay === "TUESDAY");
    const wednesdayData = calendarData.filter((meal) => meal.mealDay === "WEDNESDAY");
    const thursdayData = calendarData.filter((meal) => meal.mealDay === "THURSDAY");
    const fridayData = calendarData.filter((meal) => meal.mealDay === "FRIDAY");
    const saturdayData = calendarData.filter((meal) => meal.mealDay === "SATURDAY");
    const sundayData = calendarData.filter((meal) => meal.mealDay === "SUNDAY");

    return (
        <div id='calendar'>
            <Day day='MONDAY' data={mondayData} removeFood={removeFood} addFood={addFood} mealIds={[1, 2, 3]} />
            <Day day='TUESDAY' data={tuesdayData} removeFood={removeFood} addFood={addFood} mealIds={[4, 5, 6]} />
            <Day day='WEDNESDAY' data={wednesdayData} removeFood={removeFood} addFood={addFood} mealIds={[7, 8, 9]} />
            <Day day='THURSDAY' data={thursdayData} removeFood={removeFood} addFood={addFood} mealIds={[10, 11, 12]} />
            <Day day='FRIDAY' data={fridayData} removeFood={removeFood} addFood={addFood} mealIds={[13, 14, 15]} />
            <Day day='SATURDAY' data={saturdayData} removeFood={removeFood} addFood={addFood} mealIds={[16, 17, 18]} />
            <Day day='SUNDAY' data={sundayData} removeFood={removeFood} addFood={addFood} mealIds={[19, 20, 21]} />
        </div>
    )
}
