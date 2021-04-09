import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {App}from './BannerResolution'

import {
    BrowserView,
    MobileView,  
  } from "react-device-detect";


function Banner() {
   
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
      
    return (
                       
        <section className="banner-side ">
        
            <BrowserView>
                <Slider {...settings}>
                   <div> <img alt="banner-home" className="d-block" src={process.env.PUBLIC_URL+"/Assets/img/gallery/kewpump-banner-pc.png"}/>   </div>
                   <div>  <img alt="banner-home" className="d-block" src={process.env.PUBLIC_URL+"/Assets/img/gallery/BrooksAndel-pc-1.png"}/>   </div>
                    <img alt="banner-home" className="d-block"src={process.env.PUBLIC_URL+"/Assets/img/gallery/challenge-banner-pc.png"}/>
                </Slider>
                </BrowserView>
            <MobileView>
          
                <Slider {...settings}>
                    <App/>
                </Slider>
            </MobileView>
           
        </section>
               
            
     
        
         
    )
}

export default Banner
