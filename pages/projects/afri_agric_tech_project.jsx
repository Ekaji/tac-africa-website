/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../../styles/page.styles/newAbout.module.scss'
import Button_ from '../../components/button'
import Link from 'next/link'
import HeroBanner from '../../components/layout/nav_bar/heroBanner.jsx'

const Afri_Agric_Tech_Project = () => {

  const backgroundImg =  '/agrictech.png'

  return(
    <>
      <Container fluid className={ styles.aboutUs_container } >
        <HeroBanner text={'Artificial Intelligence & Robotics'} activeLink={'our lab'} backgroundImg={ backgroundImg } />

        <Container className={ styles.background_container }  >
          <div>
          <h1 className={ styles.background_header_main } >Artificial Intelligence & Robotics</h1>
          <h2 className={ styles.background_header } >A Phenomenal Stratedy </h2> 
          <p className={ styles.background_text }>
          Nigeria is the most populous and largest economy in Africa. Agriculture is its economic
          base and source of livelihood for the majority of Nigerians, employing two-thirds of the
          labour-force with 88% smallholder farmers, 72% living below the poverty-line and
          {`70–80%`} of smallholder labour-force women. Nigeria is listed by DAC as an ODA Recipient.</p>
            
            <p>
            Challenges for smallholder farmers are numerous, including constraints to land access;
            obsolete production methodology; supply chain inefficiencies; corruption; informal markets
            (100%), cash-economics and non-existent global- trade keeping productivity low and
            waste high. The government, FAO, UNDP, CBN and WEF concur constraints include poor
            access to credit {`(<7%)`} and adoption of technologies.
             </p>

            <p>
            {`<6%`} of farmers benefit from extension services from knowledge and information transfer,
            compounded by the decision-making power disproportionately being held by men
            and women ownership at {`<13%.`} Women smallholders account for 70% of food production
            and their lack of autonomous decision-making and agency stifles improvements from
            knowledge-intensive agriculture.
             </p>
             </div>

            <h2 className={ styles.background_header } >Steps Taken In The Right Direction</h2>
            <p>This research{`’`}s primary purpose is to enable autonomous decision-making for smallholder
              farmers in Nigeria, so they have equitable access to opportunities from frontier technology
              and financial ecosystems with increased digital skills to participate in global B2B trade
              and final stage distribution.
            </p>
            
            <p>
            Authenticated data assists the agricultural sector{`’`}s efficiency and enable services in related
            sectors such as insure Tech, EdTech, and Government Technology services. The availability
            of datasets to third-parties accelerates innovation, creates new revenue sources
            from the digital-economy and promotes indirect job creation of 15% (IMF). </p>
            
            <p>
            This underpins economic development for Nigeria with growth of at least 1% in GDP, improved
              and sustained incomes, and positive impact on food-security and better nutrition.
              Our research directly addresses the required data to enable decision-making from a farm
              to trade and beyond perspective.</p>
        </Container>

       
      </Container>
    </>

  )
}

export default Afri_Agric_Tech_Project;
