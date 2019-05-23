import React from 'react'
import './SearchBar.css';

const SearchBar = props => {
    return(
        <div className="searchBar">
            <header className="searchHeader">
                <img src='' alt="app icon" />
                <h1>Instagra</h1>
                <form>
                    <input type="text"
                    placeholder="search"
                    >
                    </input>
                </form>
                <div>
                    icons
                </div>
            </header>

        </div>
    )
}

export default SearchBar