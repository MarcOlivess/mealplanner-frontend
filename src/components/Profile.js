import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import LogoutButton from '../logout';

const Profile = () => {
    const { user, isLoading } = useAuth0();
    return (
        <div>
            {!isLoading && <p>{user.nickname}</p>}
            <div id='profile-dropdown'>
                <LogoutButton></LogoutButton>
            </div>
        </div >
    )
}

export default Profile