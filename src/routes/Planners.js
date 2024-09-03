import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import PlannerListItem from '../components/PlannerListItem';
import CreatePlannerContainer from '../components/CreatePlannerContainer';

const Planners = ({ }) => {
    const { getAccessTokenSilently, user } = useAuth0();
    const [plannerListItems, setPlannerListItems] = useState([]);
    const [updated, setUpdated] = useState(true);
    const [displayCreatePlannerContainer, setDisplayCreatePlannerContainer] = useState(false);

    const createPlanner = async (plannerName) => {
        const token = await getAccessTokenSilently();

        fetch(`http://localhost:8080/planner/user/${user.sub.replace("|", "")}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ plannerName: plannerName })
        })
            .then((response) => {
                console.log(response);
                setUpdated(true);
                setDisplayCreatePlannerContainer(false);
            });
    }

    const deletePlanner = async (plannerId) => {
        const token = await getAccessTokenSilently();

        fetch(`http://localhost:8080/planner/${plannerId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(() => setUpdated(true));
    }

    const onCreate = () => {
        setDisplayCreatePlannerContainer(true);
    }

    useEffect(() => {
        if (user === undefined) {
            return;
        }
        if (!updated) {
            return
        }

        const getPlanners = async () => {
            const token = await getAccessTokenSilently();
            fetch(`http://localhost:8080/planner/user/${user.sub.replace("|", "")}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
                .then(response => response.json())
                .then(data => {
                    setPlannerListItems(data);
                    setUpdated(false);
                })
        }

        getPlanners();
    }, [user, updated])

    return (
        <div>
            {plannerListItems.map((planner) => <PlannerListItem key={planner.id} id={planner.id} name={planner.name} deletePlanner={deletePlanner}></PlannerListItem>)}
            <button onClick={() => onCreate()}>New Planner</button>
            {displayCreatePlannerContainer && <CreatePlannerContainer displayContainer={setDisplayCreatePlannerContainer} createPlanner={createPlanner}></CreatePlannerContainer>}
        </div>
    )
}

export default Planners