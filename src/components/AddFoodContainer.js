import React, { useEffect, useState, useRef } from 'react'
import FoodListItem from './FoodListItem'
import { useAuth0 } from '@auth0/auth0-react';
import { CloseButton } from 'react-bootstrap';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const AddFoodContainer = ({ hideFoodContainer, addFood, day, meal }) => {
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

    return (
        <div ref={addRef} id='add-food-container'>
            <div id='add-food-header' className='flex-row'>
                <h1>{day} - {meal}</h1>
                <CloseButton onClick={() => hideFoodContainer()}></CloseButton>
            </div>
            <div id='food-list-items'>
                {foodList.map((foodItem) => <FoodListItem key={foodItem.id} id={foodItem.id} name={foodItem.name} url={foodItem.url} imageUrl={foodItem.imageUrl} addFood={addFood} />)}
            </div>
        </div>
    )
}

export default AddFoodContainer