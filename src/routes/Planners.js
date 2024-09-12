import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import PlannerListItem from '../components/PlannerListItem';
import CreatePlannerContainer from '../components/CreatePlannerContainer';
import { Navbar, Nav, Button } from 'react-bootstrap';


const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Planners = ({ }) => {
    const { getAccessTokenSilently, user } = useAuth0();
    const [plannerListItems, setPlannerListItems] = useState([]);
    const [updated, setUpdated] = useState(true);
    const [displayCreatePlannerContainer, setDisplayCreatePlannerContainer] = useState(false);

    const createPlanner = async (plannerName) => {
        const token = await getAccessTokenSilently();

        fetch(`${backendUrl}/planner/user/${user.sub.replace("|", "")}`, {
            method: 'POST',
            mode: 'cors',
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

        fetch(`${backendUrl}/planner/${plannerId}`, {
            method: 'DELETE',
            mode: 'cors',
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
            fetch(`${backendUrl}/planner/user/${user.sub.replace("|", "")}`, {
                mode: 'cors',
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
        <div className='main' id='planners-layout'>
            <div id='planners-topbar' className='flex-row'>
                <Button id='new-planner-button' size='sm' onClick={() => onCreate()}>New Planner</Button>
                <Navbar id='planners-navbar' className="justify-content-center">
                    <Nav fill variant='tabs' defaultActiveKey='my-planners'>
                        <Nav.Item>
                            <Nav.Link className='planners-nav-link' eventKey='my-planners'>My Planners</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
            <div id='planner-list-items'>
                {plannerListItems.map((planner) => <PlannerListItem key={planner.id} id={planner.id} name={planner.name} deletePlanner={deletePlanner}></PlannerListItem>)}
            </div>
            {displayCreatePlannerContainer && <CreatePlannerContainer displayContainer={setDisplayCreatePlannerContainer} createPlanner={createPlanner}></CreatePlannerContainer>}
        </div >
    )
}

export default Planners