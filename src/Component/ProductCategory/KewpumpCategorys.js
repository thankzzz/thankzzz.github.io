import React from 'react'
import '../Products/Products.css'
function KewpumpCategory() {
    return (
        <div className="col-lg-9 order-lg-2 productlist">
            <div className="row">
                    <div className="col-lg-12" style={{display:'flex',justifyContent:'center',alignContent:'center',marginBottom:'20px'}}>
                        <img alt="kewpump-icon" src={process.env.PUBLIC_URL+'/Assets/img/Gallery/kewpump.png'}/>
                    </div>
                </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-se03"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KS-SE3.jpg"} alt="kewpump KS-SE3" /></a>
                                    <h5>KS-SE3</h5>
                                    <a href="/product/kewpump/ks-se03" class="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-SE02"> <img src={process.env.PUBLIC_URL + "/Assets/img/gallery/KS-SE2.png"} alt="kewpump KS-SE2" /></a>
                                    <h5>KS-SE2</h5>
                                    <a href="/product/kewpump/KS-SE02" class="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-sr"> <img src={process.env.PUBLIC_URL + "/Assets/img/gallery/ks-sr.jpg"} alt="kewpump KS-SR" /></a>
                                    <h5>KS-SR</h5>
                                    <a href="/product/kewpump/ks-sr" class="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-kdp"> <img src={process.env.PUBLIC_URL + "/Assets/img/gallery/ks-sdp.jpg"} alt="kewpump KS-KDP" /></a>
                                    <h5>KS-KDP</h5>
                                    <a href="/product/kewpump/ks-kdp" class="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-to"> <img src={process.env.PUBLIC_URL + "/Assets/img/gallery/KS-TO.png"} alt="kewpump KS-TO" /></a>
                                    <h5>KS-TO</h5>
                                    <a href="/product/kewpump/ks-to" class="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-sg2"> <img src={process.env.PUBLIC_URL + "/Assets/img/gallery/KS-SG2.jpg"} alt="kewpump KS-SG2" /></a>
                                    <h5>KS-SG2</h5>
                                    <a href="/product/kewpump/ks-sg2" class="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/ks-sc"> <img src={process.env.PUBLIC_URL + "/Assets/img/gallery/KS-SC.jpg"} alt="kewpump KS-SC" /></a>
                                    <h5>KS-SC</h5>
                                    <a href="/product/kewpump/ks-sc" class="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="team__item">
                                    <a href="/product/kewpump/kcm"> <img src={process.env.PUBLIC_URL + "/Assets/img/gallery/KCM.jpg"} alt="kewpump KCM" /></a>
                                    <h5>KEWCRACKER</h5>
                                    <a href="/product/kewpump/kcm" class="primary-btn normal-btn">View More</a>
                                </div>
                            </div>
                            
                        </div>
        </div>
    )
}

export default KewpumpCategory
