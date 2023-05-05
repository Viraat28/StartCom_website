import React from 'react'
import Postside from '../../components/Postside/Postside'
import ProfileSide from '../../components/profileside/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
export const Home = () => {
  return (
    <div className='Home'>
            <ProfileSide/>
            <Postside/>
            <RightSide/>
    </div>
  )
}
