import React from 'react'

const Comment = props => {
    return(
        <div>
            <h1>{props.username}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Comment