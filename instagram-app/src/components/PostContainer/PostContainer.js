import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PostHeader from './PostHeader'

const PostContainer = props => {
    return(
        <div>
            <PostHeader user={props.user}/>
        </div>
    )
}

export default PostContainer


// {props.dummy.comments.map(element => {
//     return(<CommentSection comments={element} />) 
// })}