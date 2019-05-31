import React from 'react'
import dummyData from '../../dummy-data'


const withAuthenticate = SomeComponent => SecondComponent =>  
     class  extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                showPosts: false,
            }
        }
        someFunc = event => {
            if(!localStorage.getItem("username")) {
                this.setState({showPosts: false})
            }
            else {
                this.setState({showPosts: true})
            }
        }

    render() {
            if(this.state.showPosts) {
                return (
                <div>
                    <SomeComponent />
                </div>)
            }
            else {
                return(
                    <div>
                        <SecondComponent someFunc={this.someFunc} user={this.state.user}/>
                    </div>)
            }   
        
        }
    }

export default withAuthenticate
