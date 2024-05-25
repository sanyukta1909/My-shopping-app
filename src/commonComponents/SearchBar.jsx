// src/components/SearchBar.js
import React from 'react'
import { FaSearch } from "react-icons/fa";

// import './SearchBar.css';

const SearchBar = ({placeholder,type,value,handleInputChange ,handleButtonClick ,className}) => {
 
  return (
    <div className="border rounded px-3 w-[500px] flex justify-between bg-white">
      <input
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`outline-none w-[400px]  ${className}`}
      />
      <button onClick={handleButtonClick}><FaSearch /></button>
    </div>
  );
};



export default SearchBar;
