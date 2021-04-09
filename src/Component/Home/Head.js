import React from 'react'
import {Link} from 'react-router-dom'
function Head() {
    return (
        <React.Fragment>
           
        <div className="container-fluid">
            <div className="row px-10 flex content-center justify-center">
                <div className="flex justify-center content-center col-xl-1 col-lg-12 col-sm-12 col-md-12">
                        <div className="header__logo">
                            <Link to="/"><img   src={process.env.PUBLIC_URL+"/Assets/img/hansonlogo.png"} alt="Hanson Prima Engineering"/></Link>
                        </div>
                </div>
                <div className="flex justify-center content-center col-xl-5 col-lg-12 col-sm-12 col-md-12">
                        <div className="header__nav flex flex-column  justify-center content-center text-center">
                            <h2 className="head-m ">CV.HANSON PRIMA ENGINEERING</h2>   
                            <p className="head-sm font-semibold"> Conveyor Chain & Sprocket - Pump - Motor - Gearbox - Belt & Pulley - Coupling</p>                      
                        </div>                       
                </div>  
                <div>
                    <div className="header__menu__option">
                            <nav className="header__menu flex content-center justify-center ">
                                 <li className="font-semibold px-4 "><Link  to="/about-us">About Us</Link></li>
                                 <li className="font-semibold px-4"><Link to="/about-us">Contact Us</Link></li> 
                            </nav>
                    </div>
                </div> 
                <div className=" col-xl-2 col-lg-12 col-sm-12 flex justify-center content-center">
                    <a href="https://api.whatsapp.com/send?phone=081260090018&lang=id" rel="noopener noreferrer" target="_blank"><img  className="whatsapp-icon-head" alt="whatsapp-icon" src={process.env.PUBLIC_URL+"/Assets/img/icon/whatsapp.png"}/></a>
                </div>
               
            </div>
            
            <div className="row bg-black ">
                <div className="col-lg-12 flex justify-center">
                    <div className="header__menu__option">
                        <nav className="header__menu">
                            <ul>
                                <li className="active "><Link className="text-white" to="/">Home</Link></li>
                               
                                <li><a  className="text-white" href="/product">Products</a>
                                    <ul className="dropdown">
                                        <li><a  className="text-white"href="/product/kewpump">Kewpump</a></li>
                                        <li><a  className="text-white"href="/product/brooks">Brooks</a></li>
                                        <li><a className="text-white" href="/product/benzlers">Benzlers</a></li>
                                        <li><a  className="text-white"href="/product/challenge">Challenge</a></li>
                                        <li><a className="text-white" href="/product/cheonsei">Cheonsei</a></li>
                                    </ul>
                                </li>
                                <li><a className="text-white" href="/Gallery">Gallery</a></li>
                                <li><a className="text-white" href="/partner">Our Customers</a></li>
                                <li><a  className="text-white" href="/shipping">Shipping</a></li>
                                <li><a  className="text-white" href="/download">Downloads</a>
                                </li>
                                

                            </ul>
                        </nav>
                        {/* <div className="header__btn">
                            <a href="/contact" className="primary-btn">Contact Us</a>
                        </div> */}
                       
                    </div>
                </div>
            </div>
            
            <div className="canvas__open">
                <i className="fa fa-bars"></i>
            </div>
            
        </div>
        </React.Fragment>
    )
}

export default Head
