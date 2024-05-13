import React from 'react'
import trash from "../assets/trash.svg";

const Food = ({ id, food, removeFood, url }) => {
    return (
        <div className='flex-row food'>
            <p>{food}</p>
            <div>
                <a href={url} target='_blank' className='view-recipe-button'>RECIPE</a>
                <button className='remove-food-button' onClick={() => removeFood(id)}><img src={trash}></img></button>
            </div>
        </div>
    )
}

export default Food