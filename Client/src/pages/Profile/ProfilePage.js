import React from 'react'
import Postside from '../../components/Postside/Postside'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './ProfilePage.css'
const ProfilePage = () => {
  return (
    <div className='ProfilePage'>
        <ProfileLeft/>
        <div className='Profile-center'> 
            <ProfileCard/>
            <Postside/>
        </div>
        <RightSide/>
    </div>
  )
}

export default ProfilePage