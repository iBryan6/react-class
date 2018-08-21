import React, { Component } from 'react'
import {Layout, Header, HeaderRow, Navigation, Drawer, Content, Footer,FooterDropDownSection, FooterLinkList, FooterSection} from 'react-mdl'
import { Link } from 'react-router-dom'
import Main from './components/mainrouter'
import './App.css'

class App extends Component {
    YearNow() {
        const year = new Date().getFullYear();
        return year
    }

    /*Constructor*/
    constructor(posts){
        super(posts)
        this.state = {
          posts:[]
        }
        this.YearNow = this.YearNow.bind(this)
    }

    /*Fetch Backend data*/
    async componentDidMount(){
        const posts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        this.setState({posts})
    }

  render() {
    /*Set Variables from states*/
    const year = this.YearNow()
    /* const {posts} = this.state */

    /*Content*/
    return (
      <div className="Page">
          <Layout fixedTabs>
              <Header className='header-color' waterfall>
                  <HeaderRow title="AvenTOUR">
                    <Navigation>
                          <a href="tel:3177594940"><img src ="https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png" alt="USA flag" width="20px"/> +1-305-296-1800</a>
                          <a href="tel:3177594940"><img src ="https://cdn.countryflags.com/thumbs/bolivia/flag-round-250.png" alt="USA flag" width="20px"/> +591-769-53543</a>
                          <a href="mailto:example@email.com"><i className="material-icons">mail_outline</i> dennis_Bryan@hotmail.com</a>
                    </Navigation>
                  </HeaderRow>
                  <HeaderRow>
                      <Navigation>
                          <Link to="/">Home</Link>
                          <Link to="/why-us">Why Us</Link>
                          <Link to="/tours">Tours</Link>
                          <Link to="/reservations">Reservations</Link>
                          <Link to="/contact-us">Contact Us</Link>
                      </Navigation>
                  </HeaderRow>
              </Header>
              <Drawer title="AvenTOUR">
                  <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/why-us">Why Us</Link>
                        <Link to="/tours">Tours</Link>
                        <Link to="/reservations">Reservations</Link>
                        <Link to="/contact-us">Contact Us</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
                  <Footer size="mega">
                    <FooterSection type="middle">
                        <FooterDropDownSection title="AvenTOUR">
                            <FooterLinkList>
                                <a href="/">About</a>
                                <a href="/">Terms</a>
                                <a href="/">Partners</a>
                                <a href="/">Updates</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="Technology">
                            <FooterLinkList>
                                <a href="/">How it works</a>
                                <a href="/">Patterns</a>
                                <a href="/">Usage</a>
                                <a href="/">Products</a>
                                <a href="/">Contracts</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="FAQ">
                            <FooterLinkList>
                                <a href="/">Questions</a>
                                <a href="/">Answers</a>
                                <a href="/">Contact Us</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        <FooterDropDownSection title="Social Links">
                            <FooterLinkList>
                                <a href="/">Facebook</a>
                                <a href="/">Youtube</a>
                                <a href="/">Twitter</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                    </FooterSection>
                    <FooterSection type="bottom" logo={"© AvenTOUR "+year+". All rights reserved."}>
                        <FooterLinkList>
                            <a href="/">Help</a>
                            <a href="/">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
              </Content>
              
          </Layout>
      </div>
    );
  }
}

export default App;
