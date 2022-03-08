/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import Image from 'next/image';
import styles from '../styles/component.styles/landingPage.module.scss'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function LandingPage(){

  return(
    <section className="container-fluid">
    <div className={styles.top_container, styles.container_pd }>
        <div className="row ">
            <div className="col-md-5" styles={{paddingTop: '60px'}}>
                <div className={styles.tac_header_detail}>
                    <div className={styles.tac_header_detail__items}>
                        <h2>Combating Crime in
                            <em>Africa</em> with emerging
                            technology
                        </h2>

                        <p>
                            An NGO Obliged to bringing together Law
                            Enforcement Agents, Academia and Subject
                            Matter Experts to curb technology aided
                            crime
                        </p>

                        <Nav.Item>
                            <Button variant="outline-primary" >Learn More</Button>
                        </Nav.Item>
                    </div>

                </div>

            </div>

            <div className="col-md-7">
                <div className={styles.header_icon}>
                    <Image src="/tac-icon.svg" width='700' height='700' alt="Technology Against Crime ideology" />
                </div>
            </div>
        </div>

        <div className={styles.header_partners_icon}>
            <div className={styles.header_partners_icon__item}>
                <img className="Image-fluid" style={{maxWidth: '100%', height: 'auto'}} src="/CyberPeaceFoundation.png"
                    alt="Technology Against Crime ideology" />
                <img className="Image-fluid" style={{maxWidth: '100%', height: 'auto'}} src="/greyHareMedia.png" alt="Technology Against Crime ideology" />
            </div>

            <div className={styles.header_partners_icon__item}>
                <img className="Image-fluid" style={{maxWidth: '100%', height: 'auto'}} src="/instituteOfDroneTechnologyAustralia.png"
                    alt="Technology Against Crime ideology"  />
                <img className="Image-fluid" style={{maxWidth: '100%', height: 'auto'}} src="/logoDroneAlert.png" 
                    alt="Technology Against Crime ideology" />
            </div>

        </div>

    </div>
</section>
  )
}