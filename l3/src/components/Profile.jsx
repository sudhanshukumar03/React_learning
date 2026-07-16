import React, {useContext, useState}from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useState(UserContext)

    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.username}</div>

}

export default Profile
