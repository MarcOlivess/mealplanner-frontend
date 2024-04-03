import React from 'react'
import Meal from './Meal'

const Day = ({ day, data, removeFood, addFood }) => {
    return (
        <div className='day'>
            <div className='day-name-div'><h1 className='day-name'><span>{day}</span></h1></div>
            <Meal meal='BREAKFAST' data={data.breakfast} removeFood={removeFood} day={day} addFood={addFood} />
            <Meal meal='LUNCH' data={data.lunch} removeFood={removeFood} day={day} addFood={addFood} />
            <Meal meal='DINNER' data={data.dinner} removeFood={removeFood} day={day} addFood={addFood} />
        </div>
    )
}

export default Day