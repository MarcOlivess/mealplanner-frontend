import React from 'react'
import { useNavigate } from 'react-router-dom'
import circlex from '../assets/circle-x.svg'

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
            <button className='planner-list-item-delete' onClick={(e) => onDelete(e)}><img src={circlex}></img></button>
        </div>
    )
}

export default PlannerListItem