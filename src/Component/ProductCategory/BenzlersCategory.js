import React from 'react'

function BenzlersCategory() {
    return (
        <div className="col-lg-9 order-lg-2 productlist" >
            <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img alt="benzlers-product"src={process.env.PUBLIC_URL + '/Assets/img/Gallery/benzlers-logo.png'} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/benzlers/series-h"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/benzler-series-h.jpg"} alt="benzlers series h" /></a>
                        <h5>SERIES-H</h5>
                        <a href="/product/benzlers/series-h" class="primary-btn normal-btn">View More</a>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/benzlers/series-g"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/benzlers-series-g.jpg"} alt="benzlers series h" /></a>
                        <h5>SERIES-G</h5>
                        <a href="/product/benzlers/series-g" class="primary-btn normal-btn">View More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/benzlers/series-f"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/benzlers-series-f.jpg"} alt="benzlers series h" /></a>
                        <h5>SERIES-F</h5>
                        <a href="/product/benzlers/series-f" class="primary-btn normal-btn">View More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenzlersCategory
