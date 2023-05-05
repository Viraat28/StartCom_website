import React from 'react'

const SingleConvo = (userData,online) => {
    console.log(userData.person.profilePicture)
  return (
    <div>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          <img
            src={userData.person?.profilePicture? "https://startcomserver.azurewebsites.net/images/" + userData.person.profilePicture : "https://startcomserver.azurewebsites.net/images/" + "defaultProfile.png"}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData.person?.firstname} {userData.person?.lastname}</span>
            <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </div>
  )
}

export default SingleConvo
