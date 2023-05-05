import React from 'react'
import './Comments.css'
import { CommentsData } from '../../Data/CommentsData'
import Comment from '../Comment/Comment'

const Comments = () => {
  return (
    <div className='Comments'>
        <input type="text" placeholder='Enter Comment'/>
        <div className='list-comments'>
          {

          
            CommentsData.map((comment,id)=>{
              return <Comment data={comment} id={id}/>
            })
          }

        </div>
    </div>
  )
}

export default Comments