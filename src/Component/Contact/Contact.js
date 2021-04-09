import React from 'react'

function Contact() {
    return (
        <section className="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div class="contact__widget">
                            <div class="contact__widget__icon">
                                <i class="fa fa-map-marker"style={{color:'red'}}></i>
                            </div>
                            <div class="contact__widget__text">
                                <h5>Alamat</h5> 
                                <p>Komplek industri multiguna<br/>Jln Selayar no 6 KIM II Mabar,<br/>Percut Sei Tuan, Deli Serdang</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="contact__widget">
                            <div class="contact__widget__icon">
                                <i class="fa fa-phone" style={{color:'red'}}></i>
                            </div>
                            <div class="contact__widget__text">
                                <h5>Hunting</h5>
                                    <p>(061) 6871590/6871592</  p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="contact__widget">
                            <div class="contact__widget__icon">
                                <i class="fa fa-envelope"style={{color:'red'}}></i>
                            </div>
                            <div class="contact__widget__text">
                                <h5>Email</h5>
                                <p>sales@hansonprima.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact__content" style={{marginBottom:'30px'}}>
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="contact__pic">
                            <img src={process.env.PUBLIC_URL+"/Assets/img/contact-pic.jpg"} alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="contact__form">
                            <h3>Become A Customer / Client</h3>
                            <div className="formse">
                                <input type="text" placeholder="Name"/>
                                <input type="text" placeholder="Email"/>
                                <input type="text" placeholder="Phone Call"/>
                                <textarea placeholder="Message"></textarea>
                                <button class="site-btn">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contact
