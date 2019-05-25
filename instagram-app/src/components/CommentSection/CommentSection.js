import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        comments: [],
        index: 0
       }
    }

    componentDidMount() {
        this.setState({comments: this.props.comments})
    }


    addNewComment = (event) => {
        this.setState({comments: event.target.value})

        console.log(event.target.value)
    }

    render() {
    return(
        <div className="Comment">
            <Comment 
                username={this.state.comments.map((element, key) => {
                    return(<div key={key}><h3>{element.username}</h3>
                        <p>{element.text}</p></div>)
                })}
                text={this.state.comments.text}
            />
            <form>
                <input 
                    type="text"
                    placeholder="placeholder text"
                    onChange={this.addNewComment}
                >
                </input>
            </form>
        </div>
        
        )
    }
}

Comment.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
}

export default CommentSection

