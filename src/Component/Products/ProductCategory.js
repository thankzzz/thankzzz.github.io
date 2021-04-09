import React from 'react'

function ProductCategory() {
    return (
        <div className="col-lg-9 order-lg-2 productlist">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                <div className="flex content-center justify-center">  <a href="/product/kewpump"> <div className="img-wrapper"><img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/kewpump.png"} alt="" /></div></a></div>
                                    <a href="/product/kewpump" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                    
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <div className="flex align-center justify-center"><a href="/product/brooks"> <div className="img-wrapper"><span> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/brooks-limited-icon.jpg"} alt="" /></span></div></a></div>
                                    <a href="/product/brooks" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                <div className="flex content-center justify-center"> <a href="/product/benzlers">   <div className="img-wrapper"><span> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/benzlers-logo.png"} alt="" /></span></div></a></div>
                                    <a href="/product/benzlers" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/challenge">   <div className="img-wrapper"><span> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/challenge-logo.png"} alt="" /></span></div></a>
                                    <a href="/product/challenge" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/cheonsei">   <div className="img-wrapper "><div className="flex items-center justify-center"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/cheon-logo.png"} alt="" /></div></div></a>
                                    <a href="/product/cheonsei" className="primary-btn normal-btn">View More</a>
                                </div>
                            </div>                                                                                  
                      </div>
        </div>
    )
}

export default ProductCategory
