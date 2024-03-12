import React, { useState } from 'react'
import FoodListItem from './FoodListItem'

const FoodListContainer = ({ hideFoodContainer, addFood }) => {
    const temp = [
        {
            id: 1,
            food: 'Burrito',
            url: 'https://www.theseasonedmom.com/easiest-burrito-recipe/',
        },
        {
            id: 2,
            food: 'Alfredo Pasta',
            url: 'https://www.vegrecipesofindia.com/pasta-in-alfredo-sauce-recipe/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 4,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 5,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
    ]
    const [foodList, setFoodList] = useState(temp)
    const [foodInput, setFoodInput] = useState('');
    const [urlInput, setUrlInput] = useState('');

    return (
        <div id='food-list-container'>
            <button onClick={() => hideFoodContainer()}>X</button>
            <div id='food-list-items'>
                {foodList.map((foodItem) => <FoodListItem key={foodItem.id} food={foodItem.food} url={foodItem.url} addFood={addFood} />)}
            </div>
            <input type='text' placeholder='Enter food:' value={foodInput} onChange={(e) => setFoodInput(e.target.value)}></input>
            <input type='text' placeholder='Enter url:' value={urlInput} onChange={(e) => setUrlInput(e.target.value)}></input>
            <button onClick={() => addFood(foodInput, urlInput)}>Add food</button>
        </div>
    )
}

export default FoodListContainer