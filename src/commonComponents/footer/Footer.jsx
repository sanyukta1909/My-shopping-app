import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = ({ footerlinks }) => {
    return (
        <div className='bg-blue-500' >
            <div className='custom-container'>
                <ul className='flex gap-5 p-5 justify-center '>
                    {
                        footerlinks.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item?.path}>
                                        {item?.element}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='flex gap-4 justify-center pb-5'>
                    <p >English <MdKeyboardArrowDown className='inline-flex items-center'/> </p>
                    <p>© 2024 MyShopping.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
