import React from 'react'

import Banner from './Banner'
import CardHome from '../Home/CardHome'
import Partservice from './Partservice'
import BrandHome from './BrandHome'


function Index() {
    
    return (
        <div> 
                <Banner/>
                <CardHome/> 
                <Partservice/> 
                   
               
                <BrandHome/>
                {/* <Gallery/> */}
        </div>
    )
}

export default Index
