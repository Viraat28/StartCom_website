import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/FollowersData'
import User from '../user/User.js'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../API/userRequest'
const FollowersCard = () => {
    const [persons,setPersons]=useState([])
   
    const{user}=useSelector((state)=>state.authReducer.authData)
    useEffect(()=>{
        const fetchPersons=async()=>{
            const {data}=await getAllUser();
            var Data = data;
            Data=Data.filter((e)=>e._id!=="6390dad46982cc052e7539ec")
            setPersons(Data)
            // console.log(data)
        };
        fetchPersons();
    },[])
  return (
    <div className='f'> 
        <h3>Peers</h3>
    <div  className="FollowersCard">
      
        {
            persons.map((person,id) => {
                if(person._id!==user._id){
                return (
                    <User person={person} key={id}/>
                )
            }
            })
        }
    </div>
    </div>
  )
}

export default FollowersCard