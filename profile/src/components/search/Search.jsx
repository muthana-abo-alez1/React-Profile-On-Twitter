import React, { useRef } from 'react';
import './Search.scss';
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="search-container" onClick={handleClick}>
      <FaSearch className='search-icon' />
      <input 
        ref={inputRef}  
        type="text" 
        placeholder="Search" 
        className="search-input"
      />
    </div>
  );
};

export default Search;
