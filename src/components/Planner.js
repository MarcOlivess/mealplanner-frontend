import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Calendar } from './Calendar';
import { useAuth0 } from '@auth0/auth0-react';
import backArrow from '../assets/arrow-return-left.svg'
import { Button } from 'react-bootstrap';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Planner = ({ }) => {

    const { getAccessTokenSilently } = useAuth0();

    const { plannerId } = useParams();
    const [updated, setUpdated] = useState(true);
    const [plannerData, setPlannerData] = useState()

    const navigate = useNavigate();

    const addFood = async (recipeId, mealId, name, url, imageUrl) => {
        const token = await getAccessTokenSilently();

        const recipe = {
            id: recipeId,
            name: name,
            url: url,
            imageUrl: imageUrl
        }
        fetch(`${backendUrl}/meals/${mealId}/recipe`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            mode: "cors",
            method: "POST",
            body: JSON.stringify(recipe)
        })
            .then(response => response.json())
            .then(data => setUpdated(true))
    }

    const removeFood = async (mealId, idToRemove) => {
        const token = await getAccessTokenSilently();

        fetch(`${backendUrl}/meals/${mealId}/recipe/${idToRemove}`, {
            mode: 'cors',
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => setUpdated(true));
    }

    useEffect(() => {
        if (!updated) {
            return;
        }

        const getPlanner = async () => {
            const token = await getAccessTokenSilently();
            fetch(`${backendUrl}/planner/${plannerId}`, {
                mode: 'cors',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setPlannerData(data);
                    setUpdated(false);
                })
                .catch(error => console.error(error));
        }

        getPlanner();
    }, [updated])
    return (
        <div className='main' id='planner'>
            <div id='planner-topbar'>
                <Button onClick={() => navigate(-1)} variant='outline-secondary' id='planner-back-button'><img src={backArrow}></img></Button>
                {plannerData && <h2>{plannerData.name}</h2>}
                <div></div>
            </div>
            {plannerData && <Calendar calendarData={plannerData.meals} removeFood={removeFood} addFood={addFood}></Calendar>}
        </div >
    );
}

export default Planner