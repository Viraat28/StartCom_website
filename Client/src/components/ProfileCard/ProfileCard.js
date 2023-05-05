import React from 'react'
// import Cover from '../../images/bac_cover.jpg'
// import Profile from '../../images/trail.png'
import './ProfileCard.css'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUser } from '../../actions/userAction'
import * as UserApi from "../../API/userRequest";
import { useState } from 'react'
import { useEffect } from 'react'
// import { store } from "../../App";
const ProfileCard = () => {
  const navigate=useNavigate();

  const {user} =useSelector( (state)=>state.authReducer.authData)

  // console.log(user)
  const dispatch=useDispatch();
  const[fl,setfl]=useState(0);
  const[fo,setfo]=useState(0);
  // const {demo}=dispatch(getUser(user._id))
  // console.log(demo)
  // console.log(user._id)

  const getUser=(id)=>async()=>{
    const {data} = await UserApi.getUser(id);
    // console.log(data)
    setfl(data.following.length)
    setfo(data.followers.length)
  }
  useEffect(
    ()=>{
      dispatch(getUser(user._id))
    }
  )
  
  
  const serverPublic='https://startcomserver.azurewebsites.net/images/';
  const ProfilePage=false;
  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
        
            <img src={user.profilePicture?serverPublic+user.profilePicture:serverPublic+"defaultCover.jpg"} alt=""/>
            <img src={user.coverPicture?serverPublic+user.coverPicture:serverPublic+"defaultProfile.png"} alt=""/>
        </div>
        <div className='ProfileName'>
        {
            <span>{user.firstname}</span>     
        }
        {
          <span>{user.username}</span>
        }
        </div>
        <div className='followStatus'>        
          <hr/>
          <div>
          <div className='follow'>
            <span>{fl}</span>
            <span>Following</span>
          </div>
          <div className='vl' style={{height: '100%',
    width: 1,
    backgroundColor: '#909090'}}></div>
          <div className='follow'>
            <span>{fo}</span>
            <span>Followers</span>
          </div>
          {ProfilePage&&(
            <>
            <div className="vl" style={{height: '100%',width: 1,backgroundColor: '#909090'}}>            
            </div>
            </>
          )}
          </div>
          <hr/>
        </div>
        {/* {ProfilePage?"":<span onClick={()=>{navigate('/profile')}}>
          My Profile
        </span>} */}
        {ProfilePage?"":<span>
          <Link style={{textDecoration:"none",color:"inherit"}} to={`/profile/${user._id}`}>My Profile</Link>
          </span>}
    </div>
  )
}

export default ProfileCard