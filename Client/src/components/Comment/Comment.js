import React from 'react'
import './Comment.css'
const Comment = (data) => {
  return (
    <div className='detail'>
        <span><b>{data.username}</b></span>
    <span>{data.comment}</span>
    </div>
    
  )
}

export default Comment