import React, { useEffect, useState, useRef } from 'react'
import FoodListItem from './FoodListItem'
import { useAuth0 } from '@auth0/auth0-react';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const AddFoodContainer = ({ hideFoodContainer, addFood, day, meal }) => {
    const temp = [
        {
            id: 1,
            food: 'Burrito',
            url: 'https://www.theseasonedmom.com/easiest-burrito-recipe/',
        },
        {
            id: 2,
            food: 'Alfredo Pasta Alfredo Pasta Alfredo Pasta Alfredo Pasta',
            url: 'https://www.vegrecipesofindia.com/pasta-in-alfredo-sauce-recipe/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 1,
            food: 'Burrito',
            url: 'https://www.theseasonedmom.com/easiest-burrito-recipe/',
        },
        {
            id: 2,
            food: 'Alfredo Pasta Alfredo Pasta Alfredo Pasta Alfredo Pasta',
            url: 'https://www.vegrecipesofindia.com/pasta-in-alfredo-sauce-recipe/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        },
        {
            id: 3,
            food: 'Quesadillas',
            url: 'https://www.recipetineats.com/quesadilla/',
        }
    ]

    const addRef = useRef(null);
    const { getAccessTokenSilently } = useAuth0();

    const handleOutsideClick = (event) => {
        if (addRef.current && !addRef.current.contains(event.target)) {
            hideFoodContainer();
        }
    }

    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, []);

    useEffect(() => {
        const getRecipes = async () => {
            const token = await getAccessTokenSilently();

            fetch(`${backendUrl}/recipes`, {
                mode: 'cors',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(json => {
                    setFoodList(json);
                })
                .catch(error => console.error(error));
        }

        getRecipes();
    }, [])
    const [foodInput, setFoodInput] = useState('');
    const [urlInput, setUrlInput] = useState('');

    return (
        <div ref={addRef} id='add-food-container'>
            <div id='add-food-header' className='flex-row'>
                <h1>{day} - {meal}</h1>
                <button onClick={() => hideFoodContainer()}>X</button>
            </div>
            <div id='add-food-inputs'>
                <input id='search' type='text' placeholder='Search recipe: '></input>
                <div>
                    <input className='add-recipe-input' type='text' placeholder='Enter food:' value={foodInput} onChange={(e) => setFoodInput(e.target.value)}></input>
                    <input className='add-recipe-input' type='text' placeholder='Enter url:' value={urlInput} onChange={(e) => setUrlInput(e.target.value)}></input>
                    <button onClick={() => addFood(foodInput, urlInput)}>Add food</button>
                </div>
            </div>
            <div id='food-list-items'>
                {foodList.map((foodItem) => <FoodListItem key={foodItem.id} id={foodItem.id} name={foodItem.name} url={foodItem.url} imageUrl={foodItem.imageUrl} addFood={addFood} />)}
            </div>
        </div>
    )
}

export default AddFoodContainer