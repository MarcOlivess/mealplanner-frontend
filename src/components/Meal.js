import React, { useEffect, useState } from 'react'
import Food from './Food';
import AddFoodContainer from './AddFoodContainer';
import add from "../assets/add-button.svg";

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
            <p className='meal-header'>{meal}</p>
            <div className='meal-foods'>
                {renderFoodList.map((food) => <Food key={food.id} id={food.id} food={food.name} url={food.url} removeFood={onRemove} />)}
            </div>
            <button className='add-food-button' onClick={() => showFoodContainer()}><img src={add}></img></button>
            {displayFoodContainer && <AddFoodContainer hideFoodContainer={hideFoodContainer} addFood={onAdd} day={day} meal={meal} />}
        </div>
    )
}

export default Meal