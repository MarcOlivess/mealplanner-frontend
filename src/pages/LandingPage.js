import React, { useEffect } from 'react'
import LoginButton from '../login'
import LogoutButton from '../logout'
import { useAuth0 } from '@auth0/auth0-react'
import { redirect, useNavigate } from 'react-router-dom';

function LandingPage() {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("home")
    }

    if (isAuthenticated) {
        goToHomePage();
    }

    return (
        <div>
            <LoginButton />
        </div>
    )
}

export default LandingPage