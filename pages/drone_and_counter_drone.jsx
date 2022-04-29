/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../styles/page.styles/newAbout.module.scss'
import Button_ from '../components/button.jsx'
import Link from 'next/link'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

const Drone_And_Counter_Drone = () => {


  const backgroundImg =  "/drone and counter drone.png"

  return(
    <>
      <Container fluid className={ styles.aboutUs_container } >
        <HeroBanner text={'Drone And Counter Drone'} bannerOverlay activeLink={'our lab'} backgroundImg={ backgroundImg } />

        <Container className={ styles.background_container }  >
          <div>
          <h1 className={ styles.background_header_main } >Drone And Counter Drone</h1>
          {/* <h2 className={ styles.background_header } >A Phenomenal Stratedy </h2>  */}
            <p className={ styles.background_text }>
            The future of aviation is gradually being powered by unmanned Aerial Vehicles if the good guys don’t get involve on time the bad guys would. It is in-line with the above that TAC Africa is pioneering the following:</p>
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
                      <li> <span>&#x2022;</span> Drone Education & Research</li>
                      <li> <span>&#x2022;</span> Drone Regulation & Legal Issues</li>
                      <li> <span>&#x2022;</span> Drone Incubation </li>
                      <li> <span>&#x2022;</span> Supply Chain of Drones </li>
                      <li> <span>&#x2022;</span> Drone Safety Alliance </li>
                    </ul>
                  </div>
                </Col>

                <Col md={6}>
                  <div className={ styles.moreDetails_container__inner } >
                    <h2 className={ styles.moreDetails__header }>stakeholders</h2>
                    <ul>
                      <li> <span>&#x2022;</span> The Institute for Drone Technology (Australia)</li>
                      <li> <span>&#x2022;</span> Nigeria Flying Labs (Nigeria) </li>
                      <li> <span>&#x2022;</span> Garuda Robotics (Singapore)</li>
                      <li> <span>&#x2022;</span> Drone Alert (Spain)</li>
                      <li> <span>&#x2022;</span> Cyber Peace Foundation (India)</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>

          </div>
        </div>

        <Container className={ styles.ongoingProject_container } >

            <h2 className={ styles.ongoingProject_header } >ongoing<span className='text-primary'> projects</span></h2>
            <Row className={ styles.ongoingProject_container_inner } >
              <Col md={4} className={ styles.ongoingProject_container_coll } >
                <div className={ styles.ongoingProject_border }>
                  <div className={ styles.ongoingProject_card } >Open Innovation Platform</div>
                </div>
              </Col>

              <Col md={4} className={ styles.ongoingProject_container_coll } >
                <div className={ styles.ongoingProject_border }>
                  <div className={ styles.ongoingProject_card } >Institute for Remotely Piloted Aircraft Systems (I-RPAS) Nigeria</div>
                </div>
              </Col>

              {/* <Col md={4}>
                <div className={ styles.ongoingProject_border } >
                  <div className={ styles.ongoingProject_card } >Deep dark web crawler</div>
                </div>
              </Col> */}

            </Row>

        </Container>
       
      </Container>
    </>

  )
}

export default Drone_And_Counter_Drone ;
