import React from 'react'

const FoodListItem = ({ food, url, addFood }) => {
    return (
        <div className='food-list-item' onClick={() => addFood(food, url)}>
            <img src='https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg'></img>
            <h2>{food}</h2>
        </div>
    )
}

export default FoodListItem