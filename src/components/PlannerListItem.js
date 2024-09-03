import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlannerListItem = ({ id, deletePlanner, name }) => {
    const navigate = useNavigate();
    const navigatePlanner = () => {
        navigate(`${id}`);
    }

    const onDelete = (event) => {
        event.stopPropagation();
        deletePlanner(id);
    }

    return (
        <div className='planner-list-item' onClick={() => navigatePlanner()}>
            <p className='planner-list-item-title'>{name}</p>
            <button className='planner-list-item-delete' onClick={(e) => onDelete(e)}>Delete</button>
        </div>
    )
}

export default PlannerListItem