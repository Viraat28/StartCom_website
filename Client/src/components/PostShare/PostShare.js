import React,{useState,useRef} from 'react'
import './PostShare.css'
import Profile from '../../images/trail.png'
import {UilScenery} from "@iconscout/react-unicons"
import {UilPlayCircle} from "@iconscout/react-unicons"
import {UilTimes} from "@iconscout/react-unicons"
import {v4 as uuidv4} from 'uuid'; 
import { PostsData } from '../../Data/PostsData'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage, uploadPost } from '../../actions/uploadAction'

// import postPic3 from '../../images/bb.png'

const PostShare = () => {
  const loading=useSelector((state)=>state.postReducer.uploading)
  const[image,setImage]=useState();
  const dispatch =useDispatch();
  const {user}=useSelector((state)=>state.authReducer.authData)
  const serverPublic="https://startcomserver.azurewebsites.net/images/"
  const[postData,setPostData]=useState({
    img:"",
    desc:"",
    liked:false,
    likes:200,
    username:user.username,
    id:uuidv4(),
  })
  const reset=()=>{
    setImage(null)
    desc.current.value=""
  }
  const imageRef=useRef();
  const desc=useRef();
  const onImageChange=(event)=>{
    // console.log(event.target.files[0])
    if(event.target.files&&event.target.files[0]){
      let img=event.target.files[0];
      setImage(img)
    }
  }
  const textHandler=(e)=>{
    setPostData({...postData, desc:e.target.value})
  }
  const addPostHandler=(event)=>{
    event.preventDefault();
    event.currentTarget.disabled = true;
    const newPost={
      userId:user._id,
      desc:desc.current.value,
      username:user.username

  }
  if(image){
    const data=new FormData()
    const filename=Date.now()+image.name;
    data.append("name",filename)
    data.append("file",image)
    newPost.image=filename
    console.log("..........")
    console.log(newPost)
    console.log("..........")
    try {
      dispatch(uploadImage(data))
    } catch (error) {
      console.log(error)
    }
  }
  //  console.log(postData)
    // PostsData.push(postData)
    console.log(PostsData)
    
    // setImage('')
    // postData.desc=''
    dispatch(uploadPost(newPost))
    reset();
  }
  return (
    <div className='PostShare'>
        <img src={user.coverPicture?serverPublic+user.coverPicture:serverPublic+"defaultProfile.png"} alt=""/>    
        <div>
        <input type="text"  ref={desc} required name="desc" placeholder="What's in ur Mind" onChange={textHandler} /> 
       
        <div className='postOptions'>
        {/* <h1>Share Your Idea Across the World</h1> */}
            <div className='option' onClick={()=>imageRef.current.click()}>
            <UilScenery/>
            Photo
            </div>
            <button className='button-post' onClick={addPostHandler} disabled={loading}>{loading?"Uploading...":"share"}</button>
            <div style={{display:'none'}}>
              <input type='file' name='img' ref={imageRef} onChange={onImageChange}/>
            </div>
        </div>
        {image&&
          <div className='previewImage'>
            <UilTimes onClick={()=>setImage(null)}  />
            <img src={URL.createObjectURL(image)} alt=""/>
          </div>
        }
        </div>    
        
    </div>
  )
}

export default PostShare