import React, { Component } from 'react'
import {Grid, Cell, Card, CardActions,CardTitle, CardText, Button} from 'react-mdl'
import {Link} from 'react-router-dom'

class Tours extends Component{
    render(){
        return(
            <div style ={{width: '100%', margin:'auto'}}>
                {/* HERO */}
                <Grid className="home-banner center" style={{color: '#fff', height: '350px', background: 'url(http://crillontours.com/index.php?option=com_uniterevolution&task=showimage&img=aW1hZ2VzL3VuaXRlL1NseWRlMDAxLmpwZw==&w=1200&h=500&t=exact) center/cover'}} >
                    <Cell col={12} style={{background: 'rgba(0,0,0,0.1)'}}><div className="BannerText"><h1>Our Tours</h1></div></Cell>
                </Grid>

                {/* MAIN BODY */}
                <div className="mainbody">                
                    <Grid className="Summary" style={{width: '100%', margin: 'auto'}} >
                    {this.props.tours.map(posts =>
                    <Link to="/" className="linkTours" key={posts.id}> 
                        <Card shadow={0} style={{width: '400px', height: '400px', margin: '5px'}} >
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #F7A509'}}>{posts.title}</CardTitle>
                            <CardText><i className="far fa-calendar-alt"></i> DURATION: 12 DAYS<br/><br/><i className="fas fa-hotel"></i> HOTEL - <i className="fas fa-shuttle-van"></i> TRANSPORT - <i className="fas fa-utensils"></i> FOOD & DRINKS</CardText>
                            <CardActions border>
                                <Button colored>View More</Button>
                            </CardActions>
                        </Card></Link>)}
                    </Grid>                    
                </div>
            </div>
        )
    }
}
export default Tours