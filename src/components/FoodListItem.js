import React from 'react'

const FoodListItem = ({ id, name, url, addFood, imageUrl }) => {
    return (
        <div className='food-list-item' onClick={() => addFood(id, name, url, imageUrl)}>
            <img src={imageUrl}></img>
            <h2>{name}</h2>
        </div>
    )
}

export default FoodListItem