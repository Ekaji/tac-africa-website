/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

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
                <span style={{boxSizing:'border-box',display:'block',overflow:'hidden',width:'initial',height:'initial',background:'none',opacity:'1',border:'0',margin:'0',padding:'0',position:'absolute',top:'0',left:'0',bottom:'0',right:'0'}}><img alt="Technology Against Crime ideology" src="/tac-icon.svg" decoding="async" data-nimg="fill" className="image" style={{position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',padding:'0',border:'none',margin:'auto',display:'block',width:'0',height:'0',minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%'}} sizes="100vw" srcSet="/tac-icon.svg 640w, /tac-icon.svg 750w, /tac-icon.svg 828w, /tac-icon.svg 1080w, /tac-icon.svg 1200w, /tac-icon.svg 1920w, /tac-icon.svg 2048w, /tac-icon.svg 3840w" /><noscript><img alt="Technology Against Crime ideology" sizes="100vw" srcSet="/tac-icon.svg 640w, /tac-icon.svg 750w, /tac-icon.svg 828w, /tac-icon.svg 1080w, /tac-icon.svg 1200w, /tac-icon.svg 1920w, /tac-icon.svg 2048w, /tac-icon.svg 3840w" src="/tac-icon.svg" decoding="async" data-nimg="fill" style={{position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',padding:'0',border:'none',margin:'auto',display:'block',width:'0',height:'0',minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',}} className="image" loading="lazy"/></noscript></span>
                        {/* <img  src="/tac-icon.svg"
                                layout='fill'
                                className={styles.image}
                                alt="Technology Against Crime ideology" /> */}
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