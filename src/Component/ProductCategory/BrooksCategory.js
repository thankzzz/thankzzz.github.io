import React from 'react'

function BrooksCategory() {
    return (
        <div className="col-lg-9 order-lg-2 productlist">
            <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img alt="brooks-product" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/brooks-limited-logo.jpg'} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/brooks/palm-oil"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/brooks-palm-oil.png"} alt="kewpump KDV" /></a>
                        <h5>PALM OIL CHAIN</h5>
                        <a href="/product/brooks/palm-oil" class="primary-btn normal-btn">View More</a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BrooksCategory
