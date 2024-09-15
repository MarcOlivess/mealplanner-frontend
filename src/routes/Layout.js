import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Layout = () => {
    const { isLoading } = useAuth0();
    return (
        <div>
            {!isLoading &&
                <>
                    <Header></Header>
                    <Outlet></Outlet>
                </>
            }
        </div>
    )
}

export default Layout