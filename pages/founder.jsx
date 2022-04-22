/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../styles/page.styles/founder.module.scss'
import Button_ from '../components/button.jsx'
import Link from 'next/link'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

const Founder = () => {

  const backgroundImg =  "/advisory board.png";

  return(
    <>
      <HeroBanner activeLink={'THE FOUNDER'} text={'About us'} backgroundImg={ backgroundImg } />
        <div className={ styles.founder_container }>
        <div className={ styles.founder_container_inner }>
          <div className={ styles.founder_about }>
            <div className={ styles.founder_about_img }>
                <img src='/jerry.jpg ' alt='founder' />
            </div>
            <div className={ styles.founder_about_info }>
              <h1 className={ styles.founder_header_main }>CEO, President, TAC Africa</h1>
              <h2 className={ styles.founder_header } >Dr. Jerry Abubo</h2>
              <p>Jerry Innocent Akubo, National Technical Consultant, INTERPOL National Central Bureau, Abuja and also the CEO/Founder TAC NGO Africa. Actively engaged in Law Enforcement Technology Advisory domain for over two (2) decades now.</p>

              <p>Jerry Innocent Akubo is an International Security Consultant who is often found sharing his insights at global INTERPOL events on demystifying remote sensing apparatus, security assessment of Emerging technology platforms and initiatives.</p>

            </div>

          </div>
          <div className={ styles.founder_details }>
              <p>Jerry Innocent Akubo, National Technical Consultant, INTERPOL National Central Bureau, Abuja and also the CEO/Founder TAC NGO Africa. Actively engaged in Law Enforcement Technology Advisory domain for over two (2) decades now – in the following areas:- Project deployment officer – OASIS Africa Project deployed by INTERPOL to all the Saharan African Border. National Technical Consultant – In-Charge of Expanding INTERPOL I-24/7 databases to relevant Law Enforcement Agencies within Nigeria.
              </p>

              <p>
               Established a Digital Resource Center for the Research & Planning Department of the NPF Established an Intelligence Support System (ISS) for the Criminal Intelligence within the Police Force: Focal point – INTERPOL Cybercrime Expert Group Focal Point – INTERPOL Drone Expert Forum Focal Point – Computer Forensic Institute Country Representative/Authorized Training Partner – Institute for Drone Technology, Australia. Jerry Innocent Akubo is an International Security Consultant who is often found sharing his insights at global INTERPOL events on demystifying remote sensing apparatus, security assessment of Emerging technology platforms and initiatives geared towards encouraging the use of technology Against Crime.
              </p>

          </div>

      </div>
      </div>
    </>
  )
}

export default Founder;
