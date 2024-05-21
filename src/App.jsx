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
  const [updated, setUpdated] = useState(false);

  const addFood = (recipeId, mealId, name, url, imageUrl) => {
    // setCalendarData({ ...calendarData, [day]: { ...calendarData[day], [meal]: [...calendarData[day][meal], { id: id, food: name, url: url, imageUrl }] } });
    const recipe = {
      id: recipeId,
      name: name,
      url: url,
      imageUrl: imageUrl
    }
    fetch(`http://mealplannerbackend.us-east-2.elasticbeanstalk.com/meals/${mealId}/recipe`, {
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
    fetch(`http://mealplannerbackend.us-east-2.elasticbeanstalk.com/meals/${mealId}/recipe/${idToRemove}`, {
      method: "DELETE"
    })
      .then(setUpdated(true));
  }

  useEffect(() => {
    if (!updated && !loading) {
      return;
    }

    fetch('http://mealplannerbackend.us-east-2.elasticbeanstalk.com/meals/calendar', {
      mode: 'cors'
    })
      .then(response => response.json())
      .then(json => {
        setCalendarData(json);
        setLoading(false);
        setUpdated(false);
      })
      .catch(error => console.error(error));
  }, [updated])

  return (
    <div id='main'>
      {!loading &&
        <div>
          <h1 id="title">Weekly Food Schedule</h1>
          <Calendar calendarData={calendarData} removeFood={removeFood} addFood={addFood} />
        </div>}
    </div>
  );
}

export default App;
