// import React from 'react'
// import logo from '../../images/startcom-logo.png'
// import './LogoSearch.css'
// import {UilSearch} from '@iconscout/react-unicons'
// const LogoSearch = () => {
//   return (
//     <div className='LogoSearch'>
//         <img style={{width:80,heigth:40}}  src={logo} alt=""/>  
//         <div className='Search'>
//         <input type="text" placeholder='Explore'/>
//         <div className='s-icon'>
//           <UilSearch/>
//         </div>
//         </div>
        
//     </div>
//   )
// }

// export default LogoSearch

import React, { useState, useEffect} from "react";
import logo from "../../images/startcom-logo.png";
import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";
import { getAllUser } from "../../API/userRequest";
import User from "../user/User.js";
import { useSelector } from 'react-redux'
import Modal from "../Modal/Model.js";

const LogoSearch = () => {
  const{user}=useSelector((state)=>state.authReducer.authData)
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [persons, setPersons] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      const filteredData = data.filter(
        (e) => e._id !== "6390dad46982cc052e7539ec"&&e._id!==user._id
      );
      
      setPersons(filteredData);
    };
    fetchPersons();
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setShowResults(true);
  };

  const handleModalClose = () => {
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <div className="LogoSearch">
      <img style={{ width: 80, heigth: 40 }} src={logo} alt="" />
      <div className="Search">
        <input
          type="text"
          placeholder="Search User"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
      {showResults && (
        <Modal onClose={handleModalClose}>
          <div className="SearchResults">
            {filteredPersons.map((person, id) => (
              <User person={person} key={id} />
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default LogoSearch;





