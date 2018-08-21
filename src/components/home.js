import React, { Component } from 'react'
import {Grid, Cell,Button} from 'react-mdl'

class Home extends Component{
    render(){
        return(
            <div style ={{width: '100%', margin:'auto'}}>
            <Grid className="home-banner center" style={{color: '#fff', height: '700px', backgroundImage: 'url(https://images7.alphacoders.com/703/703654.jpg)'}} >
                <Cell col={12}><h1>Bolivian Tours & Company</h1></Cell>
                <Cell col={12}><h3>Learn More!</h3></Cell>
                <Cell col={12}><Button raised colored>Button</Button></Cell>
            </Grid>
            <Grid className="home-cards">
                <Cell col={4}><img src ="https://cdn2.iconfinder.com/data/icons/business-icons-2-3/256/Best_Choice-512.png" alt="Best Prices at Aventour" height="150px" className="centerimg"/>
                <h2>Best Selection</h2>
                <ul className="lists-nodecor">
                    <li><i className="material-icons">check</i> Choose between 100+ Tours</li>
                    <li><i className="material-icons">check</i> Guaranteed fun</li>
                </ul>
                </Cell>

                <Cell col={4}><img src ="https://cdn2.iconfinder.com/data/icons/business-icons-2-3/256/Achievement-512.png" alt="Best Prices at Aventour" height="150px" className="centerimg"/>
                <h2>Best Prices</h2>
                <ul className="lists-nodecor">
                    <li><i className="material-icons">check</i> Always pay the best and lowest price</li>
                    <li><i className="material-icons">check</i> Never pay credit card or booking fees</li>
                    <li><i className="material-icons">check</i> Travel credits with every booking</li>
                </ul>
                </Cell>
                
                <Cell col={4}><img src ="https://cdn2.iconfinder.com/data/icons/business-icons-2-3/256/Credit_Cards-512.png" alt="Best Prices at Aventour" height="150px" className="centerimg"/>
                <h2>Trusted Payments</h2>
                <ul className="lists-nodecor">
                    <li><i className="material-icons">check</i> Book via our secure payment platform</li>
                    <li><i className="material-icons">check</i> Enjoy flexible payment options</li>
                    <li><i className="material-icons">check</i> Trusted by many satisfied travellers</li>
                </ul>
                </Cell>
            </Grid>                 
            </div>
        )
    }
}
export default Home