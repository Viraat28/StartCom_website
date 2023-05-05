import React,{useState}from 'react'
import './Post.css'
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import {FaRegTrashAlt} from 'react-icons/fa'
import { FaCommentDots} from "react-icons/fa";
import { FaShare} from "react-icons/fa";
import CommentModal from '../CommentModal/CommentModal'
import { useDispatch, useSelector } from 'react-redux';
import { likePost } from '../../API/postRequest';
import { getTimelinePosts } from '../../actions/postAction'
import {deletePost} from "../../API/postRequest";
const Post = ({data}) => {
    const {user}=useSelector((state)=>state.authReducer.authData)
    // console.log(user);
    // console.log(data);
    const [liked,setLiked]=useState(data.likes.includes(user._id))
    const [likes,setLikes]=useState(data.likes.length)
    const [modalOpened,setModalOpened]=useState(false);
    const [likestate, setlikestate] = useState(data.liked)
    const[com,setcom]=useState(false)
    // console.log(data._id,user._id)
    const dispatch=useDispatch()
    // console.log(data.userId)
    // console.log(user._id)
    // console.log(data)
    // console.log(user)
    const likehandler= async ()=>{
        // if(likestate===false){
        //     setlikestate(true)
        // }
        // else{
        //     setlikestate(false)
        // }    
        setLiked(!liked)
        await likePost(data._id,user._id)
        alert('Post Liked');
        liked?setLikes((prev)=>prev-1):setLikes((prev)=>prev+1)
        window.location.reload();

    }
    const Delposthandler= async ()=>{
        await deletePost(data._id,user._id);
        alert("Post Deleted");
       window.location.reload();
    }
  return (
   <div className='Post'>
    <img src={data.image?"https://startcomserver.azurewebsites.net/images/"+data.image:""} alt=""/>
    <div className='PostReact'>
        <div className='li' onClick={()=>likehandler()}>
        {liked?<BsHeartFill style={{color:'green',height:'30px',width:'30px'}}/>:<BsHeart style={{color:'green',height:'30px',width:'30px'}}/>}
        </div> 
    {user._id===data.userId?<FaRegTrashAlt style={{color:'green',height:'30px',width:'30px'}} onClick={()=>Delposthandler()}/>:null}
    </div>
    <span style={{fontSize:'12px'}}>{likes} Likes</span>
    
    <div className='detail'>
        <span><b>{data.username}</b></span>
        <span>{data.desc}</span>
    </div>
   </div>
  )
}


export default Post