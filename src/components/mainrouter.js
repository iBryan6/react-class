import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './home'
import WhyUs from './whyus'
import ContactUs from './contactus'
import Tours from './tours'
import Reservations from './reservations'

const Main = () =>(
    <Switch>
        <Route exact path ="/" component={Home}/>
        <Route path ="/why-us" component={WhyUs}/>
        <Route path ="/contact-us" component={ContactUs}/>
        <Route path ="/tours" component={Tours}/>
        <Route path ="/reservations" component={Reservations}/>
    </Switch>
)

export default Main