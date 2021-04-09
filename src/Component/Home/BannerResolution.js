import { withOrientationChange } from 'react-device-detect'
import React from 'react'
import Slider from "react-slick";
let App = props => {
  const { isLandscape, isPortrait } = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  if (isLandscape) {
    return        <Slider {...settings}>
                  <img alt="banner-homes" className="d-block" src={process.env.PUBLIC_URL+"/Assets/img/gallery/ks-series-mobile-landscape.png"}/>   
                  <img alt="banner-home" className="d-block"src={process.env.PUBLIC_URL+"/Assets/img/gallery/brooks-andell-mobile-landscape.png"}/>
                  </Slider>
  }
  
  if (isPortrait) {
    return        <Slider {...settings}>
                   <img alt="banner-home" className="d-block" src={process.env.PUBLIC_URL+"/Assets/img/gallery/kewpump-banner-mobile-potrait.png"}/>   
                   <img alt="banner-home" className="d-block" src={process.env.PUBLIC_URL+"/Assets/img/gallery/brooks-andell-mobile-potrait.png"}/> 
                  {/* <img alt="banner-home" className="d-block"src={process.env.PUBLIC_URL+"/Assets/img/gallery/artboard2.png"}/> */}
                  </Slider>
  }
  return <div></div>
}

App = withOrientationChange(App)

export { App }