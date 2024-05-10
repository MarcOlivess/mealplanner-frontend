import React, { useEffect, useState } from 'react';
import './App.css';
import { Calendar } from './components/Calendar';

function App() {
  const temp = {
    monday: {
      breakfast: [
        {
          id: 1,
          food: 'Burrito',
          url: 'https://www.theseasonedmom.com/easiest-burrito-recipe/',
        },
        {
          id: 2,
          food: 'Cajun Pasta',
          url: 'https://www.budgetbytes.com/one-pot-creamy-cajun-chicken-pasta/',
        },
        {
          id: 3,
          food: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          url: ''
        }
      ],
      lunch: [],
      dinner: []
    },
    tuesday: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
    wednesday: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
    thursday: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
    friday: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
    saturday: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
    sunday: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
  };

  const [loading, setLoading] = useState(true);
  const [calendarData, setCalendarData] = useState({});

  const addFood = (day, meal, food, url) => {
    setCalendarData({ ...calendarData, [day]: { ...calendarData[day], [meal]: [...calendarData[day][meal], { id: Math.random(), food: food, url: url }] } });
  }

  const removeFood = (day, meal, idToRemove) => {
    let temp = calendarData[day][meal].filter(food => food.id !== idToRemove);
    setCalendarData({ ...calendarData, [day]: { ...calendarData[day], [meal]: temp } })
  }

  const saveMealPlan = () => {
    window.localStorage.setItem('mealPlan', JSON.stringify(calendarData));
  }

  useEffect(() => {
    fetch('http://localhost:8080/meals/calendar', {
      mode: 'cors'
    })
      .then(response => response.json())
      .then(json => {
        setCalendarData(json);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <div id='main'>
      {!loading &&
        <div>
          <h1 id="title">Weekly Food Schedule</h1>
          <Calendar calendarData={calendarData} removeFood={removeFood} addFood={addFood} />
          <button onClick={() => saveMealPlan()}>Save Meal Plan</button>
        </div>}
    </div>
  );
}

export default App;
