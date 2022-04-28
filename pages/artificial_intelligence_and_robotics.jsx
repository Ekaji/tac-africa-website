/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../styles/page.styles/newAbout.module.scss'
import Button_ from '../components/button.jsx'
import Link from 'next/link'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

const Artificial_Intelligence_and_Robotics = () => {

  const backgroundImg =  '/rover.png'

  return(
    <>
      <Container fluid className={ styles.aboutUs_container } >
        <HeroBanner text={'Artificial Intelligence & Robotics'} bannerOverlay activeLink={'our lab'} backgroundImg={ backgroundImg } />

        <Container className={ styles.background_container }  >
          <div>
          <h1 className={ styles.background_header_main } >Artificial Intelligence & Robotics</h1>
          {/* <h2 className={ styles.background_header } >A Phenomenal Stratedy </h2>  */}
          <p className={ styles.background_text }>
          AI & Robotics is an emerging technology that is gradually making traditional complex task easier through the use of Artificial Intelligence-controlled Robots (AI) AI – algorithm in the actual world and allows it to interact with materials in real time (AI) aid robots in seeing, walking, speaking, smelling and moving in progressive human like manners.</p>

          <p>
          As one of our pillars in TAC Africa, we are actively involved in:
          </p>
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
                  <li> <span>&#x2022;</span> Ethical AI </li>
                  <li> <span>&#x2022;</span> AI for Justice </li>
                  <li> <span>&#x2022;</span> AI for Social Good</li>
                  <li> <span>&#x2022;</span> Policy and Strategy on Artificial Intelligence</li>
                  <li> <span>&#x2022;</span> Research and Innovation in Policing</li>
                </ul>
                  </div>
                </Col>

                <Col md={6}>
                  <div className={ styles.moreDetails_container__inner } >
                    <h2 className={ styles.moreDetails__header }>stakeholders</h2>
                    <ul>
                  <li> <span>&#x2022;</span> United Nations Interregional Crime and Justice Research Institute </li>
                  <li> <span>&#x2022;</span> Africa Cyber Defense Forum (Kenya) </li>
                  <li> <span>&#x2022;</span> Cyber Peace Foundation (India) </li>
                  <li> <span>&#x2022;</span> Nigeria Flying Labs (Nigeria) </li>
                  <li> <span>&#x2022;</span> Garuda Robotics (Singapore) </li>
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
                  <div className={ styles.ongoingProject_card } > AI for Crime Prevention </div>
                </div>
              </Col>

              <Col md={4} className={ styles.ongoingProject_container_coll } >
                <div className={ styles.ongoingProject_border }>
                  <div className={ styles.ongoingProject_card } > AI for Cyber crime detection and archival</div>
                </div>
              </Col>

              <Col md={4} className={ styles.ongoingProject_container_coll } >
                <div className={ styles.ongoingProject_border } >
                  <div className={ styles.ongoingProject_card } > Deep dark web crawler</div>
                </div>
              </Col>


            </Row>

        </Container>

       
      </Container>
    </>

  )
}

export default Artificial_Intelligence_and_Robotics;
