import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import SearchBar from '../SearchBar';
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Header() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(query);
  const handleButtonClick = (e) => {
    e.preventDefault()
  };
  return (
    <div className='bg-blue-500 relative'>
      <div className='flex items-center justify-between custom-container sticky top-0'>
        <div>
          <img src={logo} alt="img" className='h-[50px] w-[150px]' />
        </div>
        <div>
          <SearchBar type={"text"} value={query} handleInputChange={handleInputChange} placeholder={"Search for products,brands and more"} handleButtonClick={handleButtonClick} className={"p-1"} />
        </div>
        <div className='flex gap-5'>
          <IoCartOutline className='h-10 w-10' /> 
          <CgProfile className='h-10 w-10 ' />
        </div>

      </div>


    </div>
  )
}

export default Header
