import React from 'react'

const Food = ({ id, food, removeFood, url }) => {
    return (
        <div className='flex-row'>
            <p>{food}</p>
            <a href={url} target='_blank'>View Recipe</a>
            <button onClick={() => removeFood(id)}>Remove</button>
        </div>
    )
}

export default Food