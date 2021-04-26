import React from 'react'
import quality from './img/quality.png'
import office from './img/office.png'
import catalogue from './img/catalogue.png'
    function ProductCategory() {
        return (
            <section className="chooseus spad pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-title">
                            <span>Why choose us?</span>
                            <h2>Offer for you</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="chooseus__item">
                        <span className="card-home2-item-img"><img src={quality} alt="best-quality"/></span>
                            <h5>Best Quality Service</h5>
                            <p>Our metering pumps have solved chemical corrosion and leakage problem by precise design</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="chooseus__item">
                        <span className="card-home2-item-img"><img src={catalogue} alt="catalogue"/></span>
                            <h5>Catalogue</h5>
                            <p>We always update our catalogue product to make sure you have the latest info</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="chooseus__item">
                        <span className="card-home2-item-img"><img src={office} alt="find-us"/></span>
                            <h5>Find Us</h5>
                            <p>We are always interested in seeking dynamic and committed engineers & manpower with the expertise, energy and resource to invest in</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    </section>
            //     <section className="productcategory">             
            //     <div className="flex content-center justify-center flex-wrap">
            //         <div className="card-home2-item">
            //                 <span className="card-home2-item-img"><img src={process.env.PUBLIC_URL+"/Assets/img/icon/quality.png"} alt=""/></span>
            //                 <span className="card-home2-item-t1">Best Quality Service</span>
            //                 <span className="card-home2-item-t2">Our metering pumps have solved chemical corrosion and leakage problem by precise design</span>                    
            //         </div>
            //         <div className="card-home2-item card-home2-margin">
            //         <span className="card-home2-item-img"><img src={process.env.PUBLIC_URL+"/Assets/img/icon/catalogue.png"} alt=""/></span>
            //         <span className="card-home2-item-t1">Catalogue</span>
            //         <span className="card-home2-item-t2">We always update our catalogue product to make sure you have the latest info</span>                          
            //         </div>                  
            //         <div className="card-home2-item">
            //                 <span className="card-home2-item-img"><img src={process.env.PUBLIC_URL+"/Assets/img/icon/office.png"} alt=""/></span>
            //                 <span className="card-home2-item-t1">Find Us</span>
            //                 <span className="card-home2-item-t2">We are always interested in seeking dynamic and committed engineers & manpower with the expertise, energy and resource to invest in</span>                              
            //         </div>                   
            //     </div>                        
            // </section>
        )
    }

export default ProductCategory
