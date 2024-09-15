import React from 'react'
import Meal from './Meal'

const Day = ({ day, data, removeFood, addFood, mealIds }) => {
    const breakfastMeal = data.find((meal) => meal.mealType === "BREAKFAST");
    const lunchMeal = data.find((meal) => meal.mealType === "LUNCH");
    const dinnerMeal = data.find((meal) => meal.mealType === "DINNER")

    return (
        <div className='day'>
            <div className='day-name-div'><h1 className='day-name'><span>{day}</span></h1></div>
            <Meal meal='BREAKFAST' data={breakfastMeal.recipes} removeFood={removeFood} day={day} addFood={addFood} mealId={breakfastMeal.id} />
            <Meal meal='LUNCH' data={lunchMeal.recipes} removeFood={removeFood} day={day} addFood={addFood} mealId={lunchMeal.id} />
            <Meal meal='DINNER' data={dinnerMeal.recipes} removeFood={removeFood} day={day} addFood={addFood} mealId={dinnerMeal.id} />
        </div>
    )
}
export default Day