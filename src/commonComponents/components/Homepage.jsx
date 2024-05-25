import React from 'react'
import Header from '../header/Header'
import Navbar from '../header/Navbar'
import Footer from '../footer/Footer'
import { Routes, Route } from 'react-router-dom';
import Slider from "react-slick";
import Led from '../../assets/images/Led-Tv.jpg';
import laptop from '../../assets/images/laptop.jpg';
import mobile from '../../assets/images/oppo-a76-mobile-phone.jpg'



function Homepage() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const FooterLinks = [
        { path: "/", element: "MyShopping" },
        { path: "/about", element: "About" },
        { path: "/help", element: "Contact Us" },
        { path: "/privacy", element: "Careers" },
        { path: "/terms", element: "Stories" },
    ]
    const sliderimages = [
        { src: Led }, { src: laptop }, { src: mobile }
    ]

    return (
        <div>
            <Header />
            <Navbar />
            <Slider {...settings}>
                <div >
                    <img src={laptop} alt="Led" className=' ' />
                </div>
                <div >
                    <img src={laptop} alt="Led" className=' ' />
                </div>
                <div >
                    <img src={laptop} alt="Led" className=' ' />
                </div>
            </Slider>
            <Footer footerlinks={FooterLinks} />
            <Routes>
                {FooterLinks?.map((item, index) => {
                    return (
                        <Route key={index} exact path={item.path} element={<item.element />} />
                    )
                })}
            </Routes>
        </div>
    )
}

export default Homepage
