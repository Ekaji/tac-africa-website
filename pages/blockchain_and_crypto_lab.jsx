
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion,Button, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../styles/page.styles/newAbout.module.scss'
import Button_ from '../components/button.jsx'
import Link from 'next/link'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

const BlockchainAndCryptoLab = () => {

  const backgroundImg =  "/Cyber-Security_and_defense.png"

  return(
    <>
      <Container fluid className={ styles.aboutUs_container } >
        <HeroBanner text={'Blockchain And Crypto Lab'} bannerOverlay activeLink={'our lab'} backgroundImg={ backgroundImg } />

        <Container className={ styles.background_container }  >
          <div>
          <h1 className={ styles.background_header_main } >Blockchain And Crypto Lab</h1>
          {/* <h2 className={ styles.background_header } >A Phenomenal Strategy </h2>  */}
          <p className={ styles.background_text }>
          With the growing number of individuals using the internet for business transaction, meeting, learning, gaming etc. The need to have a shared database cannot be re-overemphasis. At TAC Africa we adopted Block chain & E- payment as one of our focus area to enable us and our partners research and develop a blueprint in the following:</p>
          </div>
        </Container>
        

        <div className={ styles.moreDetails_container__main } >

        <div className={ styles.moreDetails_container__intro } > 
          <h2 className={ styles.moreDetails_container__intro__header }>Our work in this space</h2>
          <p>As one of our pillars in TAC Africa, we are actively involved in the space</p>
        </div>


        <div className={ styles.moreDetails } >
            <Container>
              <Row className={ styles.moreDetails_container }>
                <Col md={5} className={ styles.moreDetails_container__outer } >
                  <div className={ styles.moreDetails_header_background }>
                    <h2 className={ styles.moreDetails__header }>initiative</h2>
                  </div>
                    <ul className={ styles.moreDetails__items } >
                      <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Blockchain Regulation and Legal Issues</li>
                      <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Blockchain Against Corruption</li>
                      <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Practical Use of Blockchain Tokenomics</li>
                      <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Crypto Currency Forensics & Investigation Methodology</li>
                      <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Blockchain Education And Research</li>
                    </ul>
                </Col>

                <Col md={5} className={ styles.moreDetails_container__outer }>
                  <div className={ styles.moreDetails_header_background } >
                    <h2 className={ styles.moreDetails__header }>stakeholders</h2>
                    </div>
                    <ul className={ styles.moreDetails__items }>
                      <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> A&D Forensics </li>
                      <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Blockchain Council </li>
                      <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> African Blockchain User Group</li>
                      <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Cryptocurrency user council</li>
                      <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Blockchain Awareness Hub</li>
                      <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Cryptocurrency Learning Infrastructure</li>
                    </ul>
                </Col>
              </Row>
            </Container>
          </div>
            

        </div>


        <Container className={ styles.getInvolved_container } >
          <h2 className={ styles.getInvolved_header } >Get Involved</h2>
          <p className={ styles.getInvolved_text } >TAC Africa is open for collaborations, funding and volunteers to make them reach a more mature stage. Help us to make them become a reality!</p>
          <Button className={ styles.getInvolved_button } > <span className={ styles.button_text }> {'Join us today!'} </span> </Button >
        </Container>

        <div className={ styles.ongoingProject_container } >
          <h2 className={ styles.ongoingProject_header } >Ongoing Projects <span className='text-primary'>In The Field</span></h2>
          <p className={ styles.ongoingProject_text } >As one of our pillars in TAC Africa, we are actively involved in the space.</p>
          <div className={ styles.ongoingProject_buttons_container } >

              <Button className={ styles.ongoingProject_buttons1 } > <span className={ styles.button_text }> {'AI For Social Good'} </span> </Button >

              <Button className={ styles.ongoingProject_buttons2 } > <span className={ styles.button_text }> {'AI Cyber Criminal Detection And Archival'} </span> </Button >

              <Button className={ styles.ongoingProject_buttons3 } > <span className={ styles.button_text }> {'Deep Dark Web Crawler Project'} </span> </Button >
            
          </div>
        </div>

       
      </Container>
    </>

  )
}

export default BlockchainAndCryptoLab;
