import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Footer from './footer/Footer';
import { Routes,Route } from 'react-router-dom';


function CommonComponents() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault()
  };
  const FooterLinks = [
    { path: "/", element: "Heyhari" },
    { path: "/about", element: "About" },
    { path: "/help", element: "help" },
    { path: "/privacy", element: "Privacy" },
    { path: "/terms", element: "terms" },
    { path: "/location", element: "Location", }
  ]
  return (
    <div>
       <Footer footerlinks={FooterLinks} />
      <Routes>
        {FooterLinks?.map((item, index) => {
          return (
            <Route key={index} exact path={item.path} element={<item.element />} />
          )
        })}
      </Routes>
      <SearchBar type={"text"} value={query} handleInputChange={handleInputChange} placeholder={"search"} handleButtonClick={handleButtonClick} className={""}/>
    </div>
  )
}

export default CommonComponents
