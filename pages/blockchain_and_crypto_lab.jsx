
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../styles/page.styles/newAbout.module.scss'
import Button_ from '../components/button.jsx'
import Link from 'next/link'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

const BlockchainAndCryptoLab = () => {


  const backgroundImg =  "/Cyber-Security and defense.png"

  return(
    <>
      <Container fluid className={ styles.aboutUs_container } >
        <HeroBanner text={'Blockchain And Crypto Lab'} bannerOverlay activeLink={'our lab'} backgroundImg={ backgroundImg } />

        <Container className={ styles.background_container }  >
          <div>
          <h1 className={ styles.background_header_main } >Blockchain And Crypto Lab</h1>
          {/* <h2 className={ styles.background_header } >A Phenomenal Strategy </h2>  */}
          <p className={ styles.background_text }>
          With the growing number of individuals using the internet for business transaction, meeting, learning, gaming etc. The need to have a shared database cannot be re-overemphasis. At TAC Africa we adopted Block chain & E- payment as one of our focus area to enable us and our partners research and develop a blueprint in the following:</p>
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
                      <li> <span>&#x2022;</span> Blockchain Regulation and Legal Issues</li>
                      <li> <span>&#x2022;</span> Blockchain Against Corruption</li>
                      <li> <span>&#x2022;</span> Practical Use of Blockchain Tokenomics</li>
                      <li> <span>&#x2022;</span> Crypto Currency Forensics & Investigation Methodology</li>
                      <li> <span>&#x2022;</span> Blockchain Education And Research</li>
                    </ul>
                  </div>
                </Col>

                <Col md={6}>
                  <div className={ styles.moreDetails_container__inner } >
                    <h2 className={ styles.moreDetails__header }>stakeholders</h2>
                    <ul>
                      <li> <span>&#x2022;</span> A&D Forensics </li>
                      <li> <span>&#x2022;</span> Blockchain Council </li>
                      <li> <span>&#x2022;</span> African Blockchain User Group</li>
                      <li> <span>&#x2022;</span> Cryptocurrency user council</li>
                      <li> <span>&#x2022;</span> Blockchain Awareness Hub</li>
                      <li> <span>&#x2022;</span> Cryptocurrency Learning Infrastructure</li>
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
                  <div className={ styles.ongoingProject_card } >AI for crime prevention</div>
                </div>
              </Col>

              <Col md={4} className={ styles.ongoingProject_container_coll } >
                <div className={ styles.ongoingProject_border }>
                  <div className={ styles.ongoingProject_card } >AI for cyber crime prevention and archival</div>
                </div>
              </Col>

              <Col md={4} className={ styles.ongoingProject_container_coll } >
                <div className={ styles.ongoingProject_border } >
                  <div className={ styles.ongoingProject_card } >Deep dark web crawler</div>
                </div>
              </Col>

            </Row>

        </Container>

       
      </Container>
    </>

  )
}

export default BlockchainAndCryptoLab;
