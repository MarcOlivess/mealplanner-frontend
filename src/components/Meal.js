import React, { useEffect, useState } from 'react'
import Food from './Food';
import FoodListContainer from './FoodListContainer';

const Meal = ({ meal, data, removeFood, day, addFood }) => {
    const [foodList, setFoodList] = useState(data);
    const [renderFoodList, setRenderFoodList] = useState(foodList);
    const [displayFoodContainer, setDisplayFoodContainer] = useState(false);

    const hideFoodContainer = () => {
        setDisplayFoodContainer(false);
    }

    const showFoodContainer = () => {
        setDisplayFoodContainer(true);
    }

    const onAdd = (food, url) => {
        addFood(day.toLowerCase(), meal.toLowerCase(), food, url);
    };

    const onRemove = (idToRemove) => {
        removeFood(day.toLowerCase(), meal.toLowerCase(), idToRemove);
    }

    useEffect(() => {
        setRenderFoodList(data);
    }, [data])

    return (
        <div className='meal'>
            <p>{meal}</p>
            {renderFoodList.map((food) => <Food key={food.id} id={food.id} food={food.food} url={food.url} removeFood={onRemove} />)}
            <button onClick={() => showFoodContainer()}>Add food</button>
            {displayFoodContainer && <FoodListContainer hideFoodContainer={hideFoodContainer} addFood={onAdd} />}
        </div>
    )
}

export default Meal