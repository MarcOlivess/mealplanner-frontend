import React from 'react'
import Meal from './Meal'

const Day = ({ day, data, removeFood, addFood }) => {
    return (
        <div className='day'>
            <h1 className='day-name'>{day}</h1>
            <Meal meal='Breakfast' data={data.breakfast} removeFood={removeFood} day={day} addFood={addFood} />
            <Meal meal='Lunch' data={data.lunch} removeFood={removeFood} day={day} addFood={addFood} />
            <Meal meal='Dinner' data={data.dinner} removeFood={removeFood} day={day} addFood={addFood} />
        </div>
    )
}

export default Day