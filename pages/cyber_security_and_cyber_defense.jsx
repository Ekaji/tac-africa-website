/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion,Button, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../styles/page.styles/newAbout.module.scss'
import Button_ from '../components/button.jsx'
import Link from 'next/link'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

const Cyber_Security_And_Cyber_Defense = () => {


  const backgroundImg =  "/projects/cyber_security.jpeg"

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
                    <ul className={ styles.moreDetails__items } >
                  <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Ethical AI </li>
                  <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> AI for Justice </li>
                  <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> AI for Social Good</li>
                  <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Policy and Strategy on Artificial Intelligence</li>
                  <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Research and Innovation in Policing</li>
                </ul>
                  {/* </div> */}
                </Col>

                <Col md={5} className={ styles.moreDetails_container__outer }>
                  {/* <div className={ styles.moreDetails_container__inner } > */}
                  <div className={ styles.moreDetails_header_background }>
                    <h2 className={ styles.moreDetails__header } >stakeholders</h2>
                  </div>
                    <ul className={ styles.moreDetails__items } >
                  <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> UNICRI  </li>
                  <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Africa Cyber Defense Forum (Kenya) </li>
                  <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Cyber Peace Foundation (India) </li>
                  <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Nigeria Flying Labs (Nigeria) </li>
                  <li> <span className={ styles.moreDetails__checkmark }>&#x2713;</span> Garuda Robotics (Singapore) </li>
                </ul>
                  {/* </div> */}
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

              <Button className={ styles.ongoingProject_buttons1 } > <span className={ styles.button_text }> {'Cyber Peace Corps'} </span> </Button >

              <Button className={ styles.ongoingProject_buttons2 } > <span className={ styles.button_text }> {'Project Chakraview'} </span> </Button >

              <Button className={ styles.ongoingProject_buttons3 } > <span className={ styles.button_text }> {'Cyber Security handbook for Senior Secondary & Tertiary Institution'} </span> </Button >

              <Button className={ styles.ongoingProject_buttons3 } > <span className={ styles.button_text }> {'Cyber Security handbook for Primary & Junior Secondary School'} </span> </Button >
            
          </div>
        </div>

       
      </Container>
    </>

  )
}

export default Cyber_Security_And_Cyber_Defense ;
