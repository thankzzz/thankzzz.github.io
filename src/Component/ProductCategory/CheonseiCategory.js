import React from 'react'

function CheonseiCategory() {
    return (
        <div className="col-lg-9 order-lg-2 productlist">
            <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img alt="cheonsei-product" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/cheon-logo.png'} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/cheonsei/kdv"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/KDV.jpg"} alt="kewpump KDV" /></a>
                        <h5>KDV SERIES</h5>
                        <a href="/product/cheonsei/kdv" class="primary-btn normal-btn">View More</a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CheonseiCategory
