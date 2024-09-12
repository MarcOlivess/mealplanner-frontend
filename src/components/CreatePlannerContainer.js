import React from 'react'
import { useState } from 'react';
import { Button, CloseButton, Form } from 'react-bootstrap';

const CreatePlannerContainer = ({ displayContainer, createPlanner }) => {
    const [plannerName, setPlannerNamer] = useState();

    return (
        <div id='create-planner-container'>
            <Form.Control autoFocus type='text' size='lg' placeholder='Add Planner Name:' value={plannerName} onChange={(e) => setPlannerNamer(e.target.value)} />
            <Button id='create-planner-button' size='lg' onClick={() => createPlanner(plannerName)}>Save</Button>
            <CloseButton className='close-button' onClick={() => displayContainer(false)}></CloseButton>
        </div >
    )
}

export default CreatePlannerContainer