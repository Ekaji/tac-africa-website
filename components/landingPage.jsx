/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import Image from 'next/image';
import styles from '../styles/component.styles/landingPage.module.scss'
import {Button, Nav, Row, Col} from 'react-bootstrap'
import Button_ from '../components/button'
import Link from 'next/link'

export default function LandingPage(){

  return(
    <section className="container-fluid">
    <div className={[ styles.top_container, styles.container_pd].join(' ')}>
        <Row className={ styles.tac_header_background}>
            <Col lg={5} >
                <div className={styles.tac_header_detail}>
                    <div className={styles.tac_header_detail__items}>
                        <h1>{'Combating Crime in '}
                            <em> Africa</em> with emerging
                            technology
                        </h1>

                        <p>
                            An NGO Obliged to bringing together Law
                            Enforcement Agents, Academia and Subject
                            Matter Experts to curb technology aided
                            crime
                        </p>
                            
                            <Link href={'/about_us'}>
                                <a>
                                    <Button_ variant="outline-primary" title="Learn More" />
                                </a>
                            </Link>
                            <Link href={'/all_labs'}>
                                <a>
                                    <Button_ title="Discover" />
                                </a>
                            </Link>
                    </div>

                </div>

            </Col>

            <Col  xs={{order: 'first'}} lg={{span: 7, order: 'last'}} className={styles.header_icon__container} >
                <Col md={10} className={styles.header_icon} >
                        <Image  src="/tac-icon.svg"
                                layout='fill'
                                className={'image'}
                                alt="Technology Against Crime ideology" />
                </Col>
            </Col>
        </Row>

        {/* <Row className={['mt-md-5 mb-md-5', styles.header_partners_icon].join(' ')}>
            <div className={styles.header_partners_icon__item}>
                <Image width='150' height='50' className="Image-fluid" style={{maxWidth: '100%', height: 'auto'}} src="/CyberPeaceFoundation.png"
                    alt="Technology Against Crime ideology" />
                <Image width='150' height='50' className="Image-fluid" style={{maxWidth: '100%', height: 'auto'}} src="/greyHareMedia.png" alt="Technology Against Crime ideology" />
            </div>

            <div className={styles.header_partners_icon__item}>
                <Image width='150' height='50' className="Image-fluid" style={{maxWidth: '100%', height: 'auto'}} src="/instituteOfDroneTechnologyAustralia.png"
                    alt="Technology Against Crime ideology"  />
                <Image width='150' height='50' className="Image-fluid" style={{maxWidth: '100%', height: 'auto'}} src="/logoDroneAlert.png" 
                    alt="Technology Against Crime ideology" />
            </div>

        </Row> */}

    </div>
</section>
  )
}