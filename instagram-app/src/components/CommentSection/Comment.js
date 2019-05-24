import React from 'react'
import './CommentSection.css'

const Comment = props => {
    return(
        <div>
            <h1>{props.username}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Comment

