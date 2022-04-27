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
        <HeroBanner text={'Cyber Security And Cyber Defence'} activeLink={'our lab'} backgroundImg={ backgroundImg } />

        <Container className={ styles.background_container }  >
          <div>
          <h1 className={ styles.background_header_main } >Drone And Counter Drone</h1>
          <h2 className={ styles.background_header } >A Phenomenal Stratedy </h2> 
            <p className={ styles.background_text }>
            The future of aviation is gradually being powered by unmanned Aerial Vehicles if the good guys don’t get involve on time the bad guys would. It is in-line with the above that TAC Africa is pioneering the following:</p>
            </div>
            
            {/* <p>
             At the same time, artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems. Due to the increased capacity to analyse large amounts of data, AI may be a powerful tool to enhance the effectiveness of law enforcement agencies’ daily operations, as well as optimizing public resources through, for instance, crime hotspot analytics, forecasting where and what type of crimes are likely to occur.
             </p>

            <p>
             The United Nations Interregional Crime and Justice Research Institute (UNICRI), through its Centre for Artificial Intelligence and Robotics, and Technology Against Crime (TAC) Africa have partnered in order to explore the challenges that African law enforcement agencies may face and to better understand how AI-related technologies can provide assistance.
             </p>

            <h2 className={ styles.background_header } >Steps Taken In The Right Direction</h2>
            <p>
            Through this virtual technical workshop, UNICRI and TAC Africa, in collaboration with key representatives from African countries, seek to explore, new and emerging threats associated with AI and crime, as well as the role or possible role of AI in crime prevention in Africa and the state of AI-readiness of law enforcement communities in Africa. In doing so UNICRI and TAC Africa will endeavour to identify local priorities and concerns in this regard.
            </p>
            
            <p>
            Additionally, the workshop will seek to build a local community in the region in terms of AI and crime prevention. This network will also serve to facilitate engagement of representatives from the region in the Third INTERPOL-UNICRI Global Meeting on AI for Law Enforcement to be held virtually in November. The Global Meeting will have a specific regional component, which will include Africa, Latin America, Central Asia, and South and South East Asia. </p>
            
            <p>
            As the meeting was held virtually, there was no limit on participation, although in the interests of fostering an active discussion a smaller group is to be preferred. The number of participants were 200+. In addition to UNICRI and TAC Africa, participants from the law enforcement community in Nigeria and neighboring countries, as well as: </p>
            <ul>
             <li>Relevant regional organizations;</li> 
             <li>Local civil society organizations;</li> 
             <li>Academia; and Industry.</li> 
            </ul>
            <p>
             A reliable information exchange network and feedback mechanism on AI for Law Enforcement in Africa between UNICRI and TAC Africa; and Actionable suggestions and follow-up priorities from participants was envisioned.
          </p> */}
        </Container>

       
      </Container>
    </>

  )
}

export default Drone_And_Counter_Drone ;
