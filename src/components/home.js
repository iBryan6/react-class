import React, { Component } from 'react'
import {Grid, Cell,Button} from 'react-mdl'

class Home extends Component{
    render(){
        return(
            <div style ={{width: '100%', margin:'auto'}}>
            {/* HERO */}
            <Grid className="home-banner center" style={{color: '#fff', height: '600px', background: 'url(https://images7.alphacoders.com/703/703654.jpg) center'}} >
                <Cell col={12} style={{background: 'rgba(0,0,0,0.3)'}}><div className="BannerText"><h1>Bolivian Tours Company</h1><Button raised colored ripple>Learn More</Button></div></Cell>
            </Grid>

                {/* MAIN BODY */}
                <div className="mainbody">
                    {/* FIRST COPY */}
                    <Grid className="Summary" style={{width: '80%', margin: 'auto'}}>
                    <Cell col={12}><div className="section"><h3 className="center">Explore & Discover Bolivia</h3><p>The first thing that comes to mind when one imagines India, is its kaleidoscope of diverse cultures, traditions and unique mix of varying topographies. Packed with rich heritage and history in every corner, but co-existing peacefully with fast paced modern developments, India is a soul stirring melting pot of emotions and experience.</p><p>India Tour packed with its varying topographic reserves captures the imagination of every tourist, from the snow-capped majestic hill stations, to dusty snow trenches, to the large desert of nothingness, the happy frolicking coastlines, with all the gripping natural greens unique to its own land, then again there are the mystic ravines with busy cities tied together by the string of spirituality that is unique to the country. India with clusters of varying cultural shades and pristine natural spots is the true definition of raw beauty for every kind of tourist.</p><p>If we draw rough lines along the kinds of tourism experiences available in the country by segmenting the zones, then we will have – mountains of the Himalayas to the north, beaches in the south, desert in the west and rich tribal heritage and territory in the east. The whole country is dotted with heritage spots, historic monuments reminiscent of its past rulers from around the world, thus offering the perfect live library for aficionados of culture and history.</p></div></Cell>
                    </Grid>

                    {/* PHOTO CARDS */}
                    <Grid className="home-cards" style={{backgroundColor:'#bdc3c7', paddingTop:'50px'}}>
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
            </div>
        )
    }
}
export default Home