import React, { useEffect, useState } from 'react';
import { Calendar } from './Calendar';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../logout';

function Main() {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();


    const [planners, setPlanners] = useState([]);
    const [calendarLoaded, setCalendarLoaded] = useState(false);
    const [calendarData, setCalendarData] = useState({});
    const [updated, setUpdated] = useState(false);

    const addFood = (recipeId, mealId, name, url, imageUrl) => {
        const recipe = {
            id: recipeId,
            name: name,
            url: url,
            imageUrl: imageUrl
        }
        console.log(mealId);
        fetch(`http://localhost:8080/meals/${mealId}/recipe`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors",
            method: "POST",
            body: JSON.stringify(recipe)
        })
            .then(response => response.json())
            .then(data => setUpdated(true))
    }

    const removeFood = (mealId, idToRemove) => {
        // let temp = calendarData[day][meal].filter(food => food.id !== idToRemove);
        // setCalendarData({ ...calendarData, [day]: { ...calendarData[day], [meal]: temp } })
        fetch(`http://localhost:8080/meals/${mealId}/recipe/${idToRemove}`, {
            mode: 'cors',
            method: "DELETE"
        })
            .then(setUpdated(true));
    }
    useEffect(() => {
        if (user === undefined && !isLoading) {
            return undefined;
        }
        if (!updated && isLoading) {
            return;
        }
        //${user.sub.replace("|", "")}
        fetch(`http://localhost:8080/planner/user/${user.sub.replace("|", "")}`, {
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    return;
                }
                setPlanners(data);
                setCalendarData(data[0]);
                setUpdated(false);
                console.log(data[0]);
            })
            .catch(error => console.error(error));
    }, [updated, isLoading])
    return (
        <div id='main'>
            {!isLoading &&
                <div>
                    <h1 id="title">Weekly Food Schedule</h1>
                    {/* {planners.length === 0 ? <CreatePlanner userId={user.sub.replace("|", "")} setUpdated={setUpdated}></CreatePlanner> : <Calendar calendarData={calendarData.meals} removeFood={removeFood} addFood={addFood}></Calendar>} */}
                    <LogoutButton></LogoutButton>
                </div>}
        </div >
    );
}

export default Main;
