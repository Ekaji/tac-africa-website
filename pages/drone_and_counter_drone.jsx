/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Button, Container, Form, Row, Col} from 'react-bootstrap'
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

<div className={ styles.moreDetails_container__intro } > 
  <h2 className={ styles.moreDetails_container__intro__header }>Our work in this space</h2>
  <p>As one of our pillars in TAC Africa, we are actively involved in the space</p>
</div>

<div className={ styles.moreDetails } >
  <Container>
      <Row className={ styles.moreDetails_container } >
        <Col md={5} className={ styles.moreDetails_container__outer }  >
            <div className={ styles.moreDetails_header_background }>
              <h2 className={ styles.moreDetails__header }>initiative</h2>
            </div>
            <ul className={ styles.moreDetails__items }>
              <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Drone Education & Research</li>
              <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Drone Regulation & Legal Issues</li>
              <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Drone Incubation </li>
              <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Supply Chain of Drones </li>
              <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Drone Safety Alliance </li>
            </ul>
        </Col>

        <Col md={5} className={ styles.moreDetails_container__outer }>
          {/* <div className={ styles.moreDetails_container__inner } > */}
          <div className={ styles.moreDetails_header_background }>
            <h2 className={ styles.moreDetails__header } >stakeholders</h2>
          </div>
          <ul className={ styles.moreDetails__items }>
            <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> The Institute for Drone Technology (Australia)</li>
            <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Nigeria Flying Labs (Nigeria) </li>
            <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Garuda Robotics (Singapore)</li>
            <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Drone Alert (Spain)</li>
            <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Cyber Peace Foundation (India)</li>
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

              <Button className={ styles.ongoingProject_buttons1 } > <span className={ styles.button_text }> {'Open Innovation Platform'} </span> </Button >

              <Button className={ styles.ongoingProject_buttons2 } > <span className={ styles.button_text }> {'Institute for Remotely Piloted Aircraft Systems (I-RPAS) Nigeria'} </span> </Button >

              {/* <Button className={ styles.ongoingProject_buttons3 } > <span className={ styles.button_text }> {'Deep Dark Web Crawler Project'} </span> </Button > */}
            
          </div>
        </div>
       
      </Container>
    </>

  )
}

export default Drone_And_Counter_Drone ;
