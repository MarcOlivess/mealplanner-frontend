import React from 'react'

const FoodListItem = ({ food, url, addFood }) => {
    return (
        <div className='food-list-item' onClick={() => addFood(food, url)}>{food}</div>
    )
}

export default FoodListItem