import React from 'react'

function ChallengeCategory() {
    return (
        <div className="col-lg-9 order-lg-2 productlist" >
            <div className="row">
                <div className="col-lg-12" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginBottom: '20px' }}>
                    <img  alt="challege-product" src={process.env.PUBLIC_URL + '/Assets/img/Gallery/challenge-logo.png'} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/challenge/ffx"> <img style={{height:'196px'}}src={process.env.PUBLIC_URL + "/Assets/img/Gallery/coupling-ffx.png"} alt="benzlers series ffx" /></a>
                        <h5>FFX series</h5>
                        <a href="/product/challenge/ffx" class="primary-btn normal-btn">View More</a>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/challenge/hrc"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/coupling-hrc.png"} alt="benzlers series h" /></a>
                        <h5>Taper Bored Coupling Half Body HRC</h5>
                        <a href="/product/challenge/hrc" class="primary-btn normal-btn">View More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/challenge/coupling-natural-insert-070"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/coupling-natural-insert.png"} alt="benzlers series h" /></a>
                        <h5>Coupling Natural Insert</h5>
                        <a href="/product/challenge/coupling-natural-insert-070" class="primary-btn normal-btn">View More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="team__item">
                        <a href="/product/challenge/shaft-coupling-090b"> <img src={process.env.PUBLIC_URL + "/Assets/img/Gallery/shaft-coupling.png"} alt="benzlers series h" /></a>
                        <h5>Shaft Coupling</h5>
                        <a href="/product/challenge/shaft-coupling-090b" class="primary-btn normal-btn">View More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChallengeCategory
