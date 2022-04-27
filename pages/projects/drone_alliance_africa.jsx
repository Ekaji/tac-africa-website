/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../../styles/page.styles/newAbout.module.scss'
import Button_ from '../../components/button'
import Link from 'next/link'
import HeroBanner from '../../components/layout/nav_bar/heroBanner.jsx'

const Drone_Alliance_Africa = () => {


  const backgroundImg =  "/drone and counter drone.png"

  return(
    <>
      <Container fluid className={ styles.aboutUs_container } >
        <HeroBanner text={'Cyber Security And Cyber Defence'} activeLink={'our lab'} backgroundImg={ backgroundImg } />

        <Container className={ styles.background_container }  >
          <div>
          <h1 className={ styles.background_header_main } >Drone Alliance Africa</h1>
          <h2 className={ styles.background_header } >A Phenomenal Stratedy </h2> 
          <p className={ styles.background_text }>
            Drone Alliance Africa (DAA) is a coalition of leading technology companies representing the
            commercial drone industry before African political leaders, regulators, and other industry
            stakeholders, as well as international regulatory and advisory bodies. The commercial drone
            industry has the potential to bring tremendous economic growth, jobs, innovation, and broad
            societal benefits. Amid exponential industry growth and opportunity, it is critical to pursue a
            forward-leaning regulatory framework to fully realize this potential and further promote African
            leadership in research, production, and application of this technology.
          </p>
          </div>
        </Container>

       
      </Container>
    </>

  )
}

export default Drone_Alliance_Africa ;
