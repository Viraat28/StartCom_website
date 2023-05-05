import { Modal, useMantineTheme } from '@mantine/core';
import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/uploadAction';
import { updateUser } from '../../actions/userAction';
// import {store} from "../../App";
function ProfileModal({modalOpened,setModalOpened,data}) {


  const theme = useMantineTheme();
  // const {pd,setpd}=useContext(store);
  const {password,...other}=data
  const [formData,setformData]=useState(other);
  const[profileImage,setprofileImage]=useState(null);
  const [coverImage,setcoverImage]=useState(null);
  const dispatch=useDispatch();
  const param=useParams();

  // const [profd,setprofd]=useState({FirstName:"",LastName:"",worksAT:"",livesIN:"",Country:"",Status:""})
  const handleChange=(e)=>{
    // setprofd({...profd,[e.target.name]:e.target.value})
    setformData({...formData,[e.target.name]:e.target.value})
    // console.log(formData)
  }
  const updateHandler =(event)=>{
    event.preventDefault();
    // console.log(profd);
    // setpd(profd);  
    // console.log(pd);
  }
  const onImageChange=(e)=>{
    if(e.target.files&&e.target.files[0]){
      let img=e.target.files[0];
      e.target.name==="profileImage"?setprofileImage(img):setcoverImage(img);
    }

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    let UserData=formData;
    if(profileImage){
      const data=new FormData();
      const fileName=Date.now()+profileImage.name;
      data.append("name",fileName)
      data.append("file",profileImage)
      UserData.profilePicture=fileName;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    if(coverImage){
      const data=new FormData();
      const fileName=Date.now()+coverImage.name;
      data.append("name",fileName)
      data.append("file",coverImage)
      UserData.coverPicture=fileName;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    console.log("user data")
    console.log(UserData)

    dispatch(updateUser(param.id,UserData))
    setModalOpened(false)
  }
  return (

    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >
     <form className='infoForm' onSubmit={updateHandler}>
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstname}
          />

          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works at"
            onChange={handleChange}
            value={formData.worksAT}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="livesin"
            placeholder="LIves in"
            onChange={handleChange}
            value={formData.livesin}
          />

          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={formData.country}
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
          />
        </div>
        <div>
            Cover Image 
            <input type="file" name='profileImage' onChange={onImageChange}/>
            Profile Image
            <input type="file" name="coverImage" onChange={onImageChange}/>
        </div>

        <button className="button infoButton" onClick={handleSubmit} type='submit'>Update</button>

     </form>
    </Modal>
  );
}

export default ProfileModal;