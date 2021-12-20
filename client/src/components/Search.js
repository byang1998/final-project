import React from 'react'

export default function Search({setSearchShoe}) {
    return (
        <div>
            <label>Search Shoe:</label>
            <input 
            type="text"
            id="search"
            placeholder="Type a shoe to search..."
            onChange={(e) => setSearchShoe(e.target.value)}
            />
        </div>
    );
}