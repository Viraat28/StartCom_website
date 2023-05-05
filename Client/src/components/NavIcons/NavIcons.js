import React from "react";

// import Home from "../../img/home.png";
// import Noti from "../../img/noti.png";
// import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { UilEstate } from '@iconscout/react-unicons'
import {Routes,Route,useNavigate} from 'react-router-dom'

const NavIcons = () => {
    const navigate=useNavigate();
  return (
    <div className="navIcons">
      <UilEstate onClick={()=>{navigate('/home')}}/>
    </div>
  );
};

export default NavIcons;