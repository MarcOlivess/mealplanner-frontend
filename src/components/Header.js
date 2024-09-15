import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'


const Header = () => {
    const { user, logout } = useAuth0();

    const onLogout = () => {
        logout({ logoutParams: { returnTo: window.location.origin } })
    }
    return (
        <header id='header' className='flex-row'>
            <h1>Meal Planner App</h1>
            <nav>
                <li className='nav-link'><Link to="planners" className='nav-link-text'>Planners</Link></li>
            </nav>
            <DropdownButton size='md' id="profile-dropdown" title="Profile" align='start' rootCloseEvent='mousedown'>
                <Dropdown.Header>{user.nickname}</Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => onLogout()}>Log Out</Dropdown.Item>
            </DropdownButton>
        </header>
    )
}

export default Header