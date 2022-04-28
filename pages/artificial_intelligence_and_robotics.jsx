/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../styles/page.styles/newAbout.module.scss'
import Button_ from '../components/button.jsx'
import Link from 'next/link'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

const Artificial_Intelligence_and_Robotics = () => {

  const backgroundImg =  '/ai and robotics.png'

  return(
    <>
      <Container fluid className={ styles.aboutUs_container } >
        <HeroBanner text={'Artificial Intelligence & Robotics'} bannerOverlay activeLink={'our lab'} backgroundImg={ backgroundImg } />

        <Container className={ styles.background_container }  >
          <div>
          {/* <h1 className={ styles.background_header_main } >Artificial Intelligence & Robotics</h1> */}
          {/* <h2 className={ styles.background_header } >A Phenomenal Stratedy </h2>  */}
          <p className={ styles.background_text }>
          Machine learning is a type of artificial intelligence that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so:</p>

          <p>
          Machine learning is a type of artificial intelligence that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so
          </p>
          </div>
            
        </Container>

       
      </Container>
    </>

  )
}

export default Artificial_Intelligence_and_Robotics;
