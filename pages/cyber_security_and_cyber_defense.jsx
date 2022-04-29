/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../styles/page.styles/newAbout.module.scss'
import Button_ from '../components/button.jsx'
import Link from 'next/link'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

const Cyber_Security_And_Cyber_Defense = () => {


  const backgroundImg =  "/Cyber-Security and defense.png"

  return(
    <>
      <Container fluid className={ styles.aboutUs_container } >
        <HeroBanner text={'Cyber Security And Cyber Defense'} bannerOverlay activeLink={'our lab'} backgroundImg={ backgroundImg } />

        <Container className={ styles.background_container }  >
          <div>
          <h1 className={ styles.background_header_main } >Cyber Security And Cyber Defense</h1>
          {/* <h2 className={ styles.background_header } >A Phenomenal Strategy </h2>  */}
          <p className={ styles.background_text }>
          The emergence of the internet has no doubt enhance the way we live, work, socialize and transact  business to a great extent but cyber criminals are taking un-due advantage of the opportunity created by the internet to lunch attack on netizens through the deployment of ransom ware, stalker wares, virus etc. As one of our cardinal focus area; we are poised to help law enforcement agents on:</p>
             </div>
        </Container>

        <div className={ styles.moreDetails_container__main } >
          <div className={ styles.moreDetails_container__mask }>

            <Container>
              <Row className={ styles.moreDetails_container }>
                <Col md={6}>
                  <div className={ styles.moreDetails_container__inner } >
                    <h2 className={ styles.moreDetails__header }>initiative</h2>
                    <ul>
                      <li> <span>&#x2022;</span> cyber capability enhancement</li>
                      <li> <span>&#x2022;</span> trapping the cyber criminals</li>
                      <li> <span>&#x2022;</span> cyber policy research</li>
                      <li> <span>&#x2022;</span> cyber forensics</li>
                    </ul>
                  </div>
                </Col>

                <Col md={6}>
                  <div className={ styles.moreDetails_container__inner } >
                    <h2 className={ styles.moreDetails__header }>stakeholders</h2>
                    <ul>
                      <li> <span>&#x2022;</span> Cyber Peace Foundation (India) </li>
                      <li> <span>&#x2022;</span> African Cyber Defence Forum (Kenya)</li>
                      <li> <span>&#x2022;</span> G. Bina Cyber Security Advisory Services (Israel)</li>
                      <li> <span></span></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>

            {/* <Container className={ styles.moreDetails_container } >

              <div className={ styles.moreDetails_container__inner } >
                <h2 className={ styles.moreDetails__header }>initiative</h2>
                <ul>
                  <li> <span>&#x2022;</span> cyber capability enhancement</li>
                  <li> <span>&#x2022;</span> trapping the cyber criminals</li>
                  <li> <span>&#x2022;</span> cyber policy research</li>
                  <li> <span>&#x2022;</span> cyber forensics</li>
                </ul>
              </div>
              
              <div className={ styles.moreDetails_container__inner } >
                <h2 className={ styles.moreDetails__header }>stakeholders</h2>
                <ul>
                  <li> <span>&#x2022;</span> Cyber Peace Foundation (India) </li>
                  <li> <span>&#x2022;</span> African Cyber Defence Forum (Kenya)</li>
                  <li> <span>&#x2022;</span> G. Bina Cyber Security Advisory Services (Israel)</li>
                  <li> <span></span></li>
                </ul>
              </div>
            </Container> */}

          </div>
        </div>

        <Container className={ styles.ongoingProject_container } >

            <h2 className={ styles.ongoingProject_header } >ongoing<span className='text-primary'> projects</span></h2>
            <Row className={ styles.ongoingProject_container_inner } >
              <Col md={4} className={ styles.ongoingProject_container_coll } >
                <div className={ styles.ongoingProject_border }>
                  <div className={ styles.ongoingProject_card } >Cyber Peace Corps</div>
                </div>
              </Col>

              <Col md={4} className={ styles.ongoingProject_container_coll } >
                <div className={ styles.ongoingProject_border }>
                  <div className={ styles.ongoingProject_card } > Project Chakraview </div>
                </div>
              </Col>

              <Col md={4} className={ styles.ongoingProject_container_coll }>
                <div className={ styles.ongoingProject_border } >
                  <div className={ styles.ongoingProject_card } > Cyber Security handbook for Senior Secondary & Tertiary Institution</div>
                </div>
              </Col>

              <Col md={4} className={ styles.ongoingProject_container_coll }>
                <div className={ styles.ongoingProject_border } >
                  <div className={ styles.ongoingProject_card } > Cyber Security handbook for Primary & Junior Secondary School Cyber
                    Peace Dialogue</div>
                </div>
              </Col>

            </Row>

        </Container>

       
      </Container>
    </>

  )
}

export default Cyber_Security_And_Cyber_Defense ;
