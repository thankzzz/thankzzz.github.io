import React from 'react'

    import "slick-carousel/slick/slick.css"; 
    import "slick-carousel/slick/slick-theme.css";

function BrandHome() {
    
    return (
        // <div className="card-home4">
        //        <div className="card-home4-t1">
        //            Brand we carry include
        //        </div>
        //        <div className="card-home4-iwrap">
                    
        //        </div>
        //    {/* 
        //    <div className="card-home4-t1 flex flex-wrap">
        //         <img className="w-300 mx-4"src={process.env.PUBLIC_URL + "/Assets/img/Corporate/kewpump-icon.png"} alt="kewpump-icon" />
        //         <img className="w-300 h-20" src={process.env.PUBLIC_URL + "/Assets/img/Corporate/brooks-limited-icon.png"} alt="brooks-icon" />
        //         <img className="w-300 h-20 mx-4" src={process.env.PUBLIC_URL + "/Assets/img/Corporate/benzlers-logo.png"} alt="benzlers-icon" />
        //         <img className="w-300 h-20 mx-4" src={process.env.PUBLIC_URL + "/Assets/img/Corporate/challenge-logo.png"} alt="challenge-icon" />
        //         <img className="w-300 h-20" src={process.env.PUBLIC_URL + "/Assets/img/Corporate/cheon-logo.png"} alt="cheon-icon" />
        //    </div> */}            
        // </div>
        <section className="team spad pt-0">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="section-title">
                        <h2>Brand we carry include</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="team__item">
                    <div className="flex content-center justify-center"><img className=" h-20" src={process.env.PUBLIC_URL + "/Assets/img/Corporate/kewpump-icon.png"} alt="kewpump-icon" /></div>
                        <h5>Kewpump</h5>
                        <span>Centrifugal Pump</span>
                      
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="team__item">
                    <div className="flex content-center justify-center">    <img className="h-20" src={process.env.PUBLIC_URL + "/Assets/img/Corporate/brooks-limited-icon.jpg"} alt="brooks-icon" /></div>
                        <h5>Brooks Andel</h5>
                        <span>Conveyor Chain</span>
                       
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="team__item ">
                    <div className="flex content-center justify-center "> <img className="h-20" src={process.env.PUBLIC_URL + "/Assets/img/Corporate/cheon-logo.png"} alt="cheon-icon" />   </div>
                        <h5>Cheonsei</h5>
                        <span>Chemical Pump</span>
                      
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team__item">
                    <div className="flex content-center justify-center"> <img className=" h-20 mx-4" src={process.env.PUBLIC_URL + "/Assets/img/Corporate/challenge-logo.png"} alt="challenge-icon" />   </div>
                        <h5>Challenge</h5>
                        <span>Belt & Pulley - Coupling</span>

                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="team__item">
                    <div className="flex content-center justify-center"><img className="w-300 h-20 mx-4" src={process.env.PUBLIC_URL + "/Assets/img/Corporate/benzlers-logo.png"} alt="benzlers-icon" /></div>
                        <h5>Benzlers</h5>
                        <span>Belt & Pulley - Coupling</span>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BrandHome
