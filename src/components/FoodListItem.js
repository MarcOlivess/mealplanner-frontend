import React from 'react'

const FoodListItem = ({ food, url, addFood, imageUrl }) => {
    return (
        <div className='food-list-item' onClick={() => addFood(food, url)}>
            <img src={imageUrl}></img>
            <h2>{food}</h2>
        </div>
    )
}

export default FoodListItem