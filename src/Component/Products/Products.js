import React from 'react'
import ProductCategory from './ProductCategory'
import {BrowserRouter as Router , Route,Switch,useRouteMatch} from 'react-router-dom'
import './Products.css'
import KewpumpCategory from '../ProductCategory/KewpumpCategorys'

import './ProductDetail.css'
import ItemKSSR from '../Content/ProductItem/kewpump/ItemKSSR'
import itemKSDP from '../Content/ProductItem/kewpump/itemKSDP'
import ItemKSSE2detail from '../Content/ProductItem/kewpump/itemKSSE2detail.js'
import itemKSTO from '../Content/ProductItem/kewpump/itemKSTO'
import itemKSSG from '../Content/ProductItem/kewpump/itemKSSG'
import itemKSSE3 from '../Content/ProductItem/kewpump/itemKSSE3'
import itemKSSC from '../Content/ProductItem/kewpump/itemKSSC'
import itemKCM from '../Content/ProductItem/kewpump/itemKCM'
import CheonseiCategory from '../ProductCategory/CheonseiCategory'
import itemKD from '../Content/ProductItem/Cheonsei/itemKD'
import BenzlersCategory from '../ProductCategory/BenzlersCategory'
import itemBenzlersH from '../Content/ProductItem/Benzlers/itemBenzlersH'
import itemBenzlersG from '../Content/ProductItem/Benzlers/itemBenzlersG'
import {Formik,Field}from 'formik'
import * as Yup from 'yup'
import itemBenzlersF from '../Content/ProductItem/Benzlers/itemBenzlersF'
import BrooksCategory from '../ProductCategory/BrooksCategory'
import PalmOil from '../Content/ProductItem/Brooks/PalmOil'
import ChallengeCategory from '../ProductCategory/ChallengeCategory'
import itemCouplingFFX from '../Content/ProductItem/Challenge/itemCouplingFFX'
import itemCouplingHRC from '../Content/ProductItem/Challenge/itemCouplingHRC'
import itemCouplingCNI from '../Content/ProductItem/Challenge/itemCouplingCNI'
import itemCouplingSC from '../Content/ProductItem/Challenge/itemCouplingSC'

const initialValues = {
    name : "",
    email : "",
    phone :""
}
const validatioSchema = Yup.object({
    name : Yup.string().required(),
    email : Yup.string().required(),
    phone: Yup.string().required()
})

function Products() {
  const handleDownload = (e)=>{
      e.preventDefault()
      window.location.href = process.env.PUBLIC_URL + "/Assets/download/hanson-catalog2020.rar"
  }
    let {path} = useRouteMatch()
    return (
        <section className="productcategory">
            <Router>
            <div className="container">
                <div className="row" style={{marginBottom:"20px"}}>
                    <Switch>
                    <Route exact path={`${path}/`} component={ProductCategory}/>
                    <Route path={`${path}/kewpump/ks-se03`} component={itemKSSE3}/>
                    <Route path={`${path}/kewpump/ks-se02`} component={ItemKSSE2detail}/>
                    <Route path={`${path}/kewpump/ks-sr`} component={ItemKSSR}/>
                    <Route path={`${path}/kewpump/ks-sg2`} component={itemKSSG}/>
                    <Route path={`${path}/kewpump/ks-sc`} component={itemKSSC}/>
                    <Route path={`${path}/kewpump/ks-to`} component={itemKSTO}/>
                    <Route path={`${path}/kewpump/ks-kdp`} component={itemKSDP}/>
                    <Route path={`${path}/kewpump/kcm`} component={itemKCM}/>
                    <Route path={`${path}/brooks/palm-oil`} component={PalmOil}/>
                    <Route path={`${path}/benzlers/series-h`} component={itemBenzlersH}/>
                    <Route path={`${path}/benzlers/series-g`} component={itemBenzlersG}/>
                    <Route path={`${path}/benzlers/series-f`} component={itemBenzlersF}/>
                    <Route path={`${path}/challenge/ffx`} component={itemCouplingFFX}/>
                    <Route path={`${path}/challenge/hrc`} component={itemCouplingHRC}/>
                    <Route path={`${path}/challenge/coupling-natural-insert-070`} component={itemCouplingCNI}/>
                    <Route path={`${path}/challenge/shaft-coupling-090b`} component={itemCouplingSC}/>
                    <Route path={`${path}/cheonsei/kdv`} component={itemKD}/>
                    <Route path={`${path}/benzlers`} component={BenzlersCategory}/>
                    <Route path={`${path}/cheonsei`} component={CheonseiCategory}/>
                    <Route path={`${path}/kewpump`} component={KewpumpCategory}/>
                    <Route path={`${path}/brooks`} component={BrooksCategory}/>
                    <Route path={`${path}/challenge`} component={ChallengeCategory}/>
                    </Switch>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validatioSchema}
                    >
                        {formik=>{return(
                    <div className="col-lg-3 order-lg-1">
                        <div className="services__appoinment">
                            <div className="services__title" style={{ marginBottom: '20px' }}>
                                <h5><img src="img/icons/services-icon.png" alt="" /> Download Our Catalog</h5>
                            </div>
                            <div className="formse">
                                <Field type="text" name="name" placeholder="Name" />
                                <Field type="email"  name="email" placeholder="Email" />
                                <Field type="number"  name="phone"  placeholder="Phone Number/Whatsapp"/>
                                <button className="site-btn" disabled={!formik.isValid || formik.isSubmitting || !formik.dirty} onClick={(e)=>handleDownload(e)}>Download</button>
                                </div>
                        </div>
                    </div>
                    )}}
                    </Formik>
                </div>
            </div>
            </Router>
        </section>
    )
}

export default Products
