import React from 'react'
import './RightSide.css'
import {UilSetting} from '@iconscout/react-unicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import { UilChat } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import {Routes,Route,useNavigate} from 'react-router-dom'
const RightSide = () => {
  const navigate=useNavigate();
  return (
    <div className='RightSide'>
        <div className='navIcons'>
          <div className='home-page'>
          <UilEstate onClick={()=>{navigate('/home')}}/>
          </div>
           
            <UilSetting/>
            <UilBell/>
            <div className='chat-page'>
            <UilChat onClick={()=>{navigate('/chat')}}/>
            </div>
        </div>
        <TrendCard/>
        {/* {<button className='button-rside' onClick={()=>{navigate('/')}}>LOGOUT</button>} */}
       

    </div>
    
  )
}

export default RightSide