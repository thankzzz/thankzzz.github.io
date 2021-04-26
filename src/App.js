import React from 'react';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './Component/AboutUs/About';
import Contact from './Component/Contact/Contact';
import Download from './Component/Download/Download';
import Footer from './Component/Home/Footer'
import Head from './Component/Home/Head';
import Index from './Component/Home/Index';
import Mhead from './Component/Home/Mhead';
import Nomatch from './Component/Nomatch';
import Partner from './Component/Partner/Partner';
import Products from './Component/Products/Products';
import Shipping from './Component/Shipping/Shipping';
function App() {
 
  return (
    <div className="App">
       <Router>
          <Head/>
            <Mhead/>
              <Switch>
                  <Route exact path="/" component={Index}></Route>
                  <Route path='/product' component={Products}></Route>
                  <Route  exact path='/contact-us' component={Contact}></Route>
                  <Route exact path='/about-us' component={About}></Route>
                  <Route exact path='/download' component={Download}></Route>
                  <Route  exact path="/shipping" component={Shipping}></Route>
                  <Route exact path="/partner" component={Partner}></Route>
                  <Route path='*' component={Nomatch}/>
              </Switch>   
            <Footer/>
      </Router>
    </div>
  );
}

export default App;
