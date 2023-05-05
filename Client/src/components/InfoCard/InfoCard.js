import React, { useState ,useContext, useEffect} from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../API/userRequest.js'
import { logout } from '../../actions/authAction';
// import { store } from "../../App";
const InfoCard = () => {
    const [modalOpened,setModalOpened]=useState(false);
    const dispatch=useDispatch();
    const params=useParams();
    const profileUserId=params.id
    // console.log(profileUserId)
    const[profileUser,setProfileUser]=useState({})
    const {user}=useSelector((state)=>state.authReducer.authData)
    const handleLogOut=()=>{
        dispatch(logout())
    }
    // console.log(user)
    useEffect(()=>{
        const fetchProfileUser=async()=>{
            if(profileUserId===user._id){
                setProfileUser(user)
                // console.log(profileUser)
            }
            else{
                const profileUser=await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
                // console.log(profileUser)
            }
        }
        fetchProfileUser();
    }, [profileUser, profileUserId, user])
    // console.log(user)
    // console.log(profileUser )
    // const { pd } =useContext(store);
    // console.log(pd)
    // const[isPenClick,setisPenClick]=useState(false);
  return (
    <div className='InfoCard'>
        <div className='infoHead'>
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user}/>
            </div>
        </div>
        <div className='info'>
            <span><b>Status </b></span>
            <span>{profileUser.status}</span>
        </div>
        <div className='info'>
            <span><b>Lives in </b></span>
            <span>{profileUser.livesin}</span>
        </div>
        <div className='info'>
            <span><b>Works at </b></span>
            <span>{profileUser.worksAt}</span>
        </div>
        <button className='button-lo' onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default InfoCard