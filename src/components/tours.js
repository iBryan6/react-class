import React, { Component } from 'react'
import {Grid, Cell, Card, CardActions,CardTitle, CardText, Button} from 'react-mdl'

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
                    {/* FIRST COPY */}
                    <Grid className="Summary" style={{width: '80%', margin: 'auto'}}>
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenan convallis.
                            </CardText>
                            <CardActions border>
                                <Button colored>View Updates</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
            </div>
        )
    }
}
export default Tours