import React from 'react'

function Download() {
    return (
        <section className="download" style={{marginBottom:'20px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>File download</th>
                            
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>KEWPUMP KS-SR</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SR.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                                
                            </tr>
                            <tr>
                                <td>KEWPUMP KS-SE2</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SE2.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            
                            </tr>
                            <tr>
                                <td>KEWPUMP KS-SE3</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SE3.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            
                            </tr>
                            <tr>
                                <td>KEWPUMP KS-SC</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SC.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>KEWPUMP KS-KDP</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-KDP.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>KEWPUMP KS-SG2</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KS-SG2.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>KEWPCRACKER</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/KCM.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>KEMPION</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/kd-series.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>  
                            </tr>
                            <tr>
                                <td>CONVEYOR CHAIN BROOKS ANDELL</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/palm_oil_chain.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>POWER TRANSMISSION PRODUCT</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/challenge.pdf"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            <tr>
                                <td>GEARBOX AND GEARMOTOR</td>
                                <td> <a href={process.env.PUBLIC_URL + "/Assets/download/Gearbox-gearmotor.rar"} target="_blank" rel="noopener noreferrer" >Download</a></td>
                            </tr>
                            </tbody>
                        </table>
                                        </div>
                                        </div>
                                        </div>
                                </section>
       
        
    )
}

export default Download
