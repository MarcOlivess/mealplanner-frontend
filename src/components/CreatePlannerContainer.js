import React from 'react'
import { useState } from 'react';
import { CloseButton } from 'react-bootstrap';

const CreatePlannerContainer = ({ displayContainer, createPlanner }) => {
    const [plannerName, setPlannerNamer] = useState();

    return (
        <div id='create-planner-container'>
            <p>Create A New Planner</p>
            <input value={plannerName} onChange={(e) => setPlannerNamer(e.target.value)} placeholder='Planner Name'></input>
            <button onClick={() => createPlanner(plannerName)}>Create Planner</button>
            <CloseButton onClick={() => displayContainer(false)}></CloseButton>
        </div>
    )
}

export default CreatePlannerContainer