import React from 'react'

import Banner from './Banner'
import CardHome from '../Home/CardHome'
import Partservice from './Partservice'
import BrandHome from './BrandHome'


function Index() {
    
    return (
       <React.Fragment>
                <Banner/>
                <CardHome/> 
                <Partservice/> 
                   
               
                <BrandHome/>
                {/* <Gallery/> */}
        </React.Fragment> 
    )
}

export default Index
