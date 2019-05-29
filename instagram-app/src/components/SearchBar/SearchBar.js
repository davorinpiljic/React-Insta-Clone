import React from 'react'
import './SearchBar.css';

const SearchBar = props => {

    return(
        <div className="searchBar">
            <header className="searchHeader">
                <img src='https://img.icons8.com/ios/50/000000/instagram-new.png' alt="app icon" />
                <img src="https://img.icons8.com/material/32/000000/vertical-line.png" />
                <h1>Instagram</h1>
             
            <form onSubmit={props.commentFilter}>
                <input type="text"
                    placeholder="search"
                    onChange={props.searchHandle}
                    >
                </input>
            </form> 
        
                <div>
                    <img src="https://img.icons8.com/material-outlined/32/000000/compass.png" />
                    <img src="https://img.icons8.com/windows/32/000000/gender-neutral-user.png" />
                    <img src="https://img.icons8.com/windows/32/000000/hearts.png" />
                </div>
        
            </header>
        </div>
    )
}


export default SearchBar