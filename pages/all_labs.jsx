 /* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../styles/page.styles/allLabs.module.scss'
import Button_ from '../components/button.jsx'
import Link from 'next/link'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'
import "react-multi-carousel/lib/styles.css";

const All_labs = () => {

  const data =  [
    {
      title: 'Cyber Security & Cyber Defense',  //https://www.pexels.com/photo/close-up-view-of-a-golden-coin-315788/
      image: '/cyber defence.jpg',
      text: 'Leading Cloud-Delivered Endpoint Protection Platform. Powered by Artificial Intelligence. Independently Tested and ...',
      link: '/cyber_security_and_cyber_defense',
    },
    {
      title: 'Artificial Intelligence And Robotics',
      image: '/ai and robotics.jpg',
      text: 'Major technological disruptions, like artificial intelligence and machine learning, are their way to the industrial robotics industry.',
      link: '/artificial_intelligence_and_robotics',
    },
    {
      title: 'Blockchain And Payment Gateways',
      image: 'piles-coins-with-plant-front-graph.jpg',
      text: 'Major technological disruptions, like artificial intelligence and machine learning, are their way to the industrial robotics industry.',
      link: '/blockchain_and_crypto_lab',
    },
    {
      title: 'Drone & Counter Drone',
      image: 'Blog_Drones.jpg',
      text: 'Learn advanced methods involved in sending new signals, communicating with GPS satellites for easy navigation.',
      link: '/drone_and_counter_drone',
    },
    {
      title: 'satellite and remote sensing',
      image: 'satellite.jpg',
      text: 'Advanced satellite systems for locating, tracking and monitoring remote assets. Simple, flexible and affordable solutions.',
      link: '/satellite_and_remote_sensing_lab'
    }
  ]
    

  const backgroundImg =  "/ser-2.png";

  return(
    <>

      <HeroBanner activeLink={'THE FOUNDER'} text={'About us'} backgroundImg={ backgroundImg } />

      <Container style={{paddingTop: '3em', paddingBottom: '5em'}} >

<div className={ [' ', styles.carousel_header__component].join(' ')} >
  <p className={ styles.carousel_container__text } >Below are a selection of projects that we have partnered with and fully support their community development goals. Featured Projects. Blockchain & Payment Gateways</p>
</div>

    <div className={["row text-center", styles.card_container].join(' ')}>

        { data.map((edge, i) => (
            <div className={"col-md-4"}>
            <div key={i} className={[, styles.carousel_component_inner].join(' ')}  >
                <div className={ styles.carousel_image }>
                    <img className={ styles.carousel_image } src={ edge?.image } alt={ edge.image } />
                    <div className={ styles.carousel_mask } >
                    <div className={ styles.carousel_button__container } >
                        <Link href={edge.link}>
                        <a>
                            <Button_ title={'Learn More'} variant={'outline-light' } style={{border: '2px solid white'}} />
                        </a>
                        </Link>
                    </div>
                    </div>
                </div>
                <div className={ styles.carousel_details } >
                    <h2 className={ styles.carousel_title } >{ edge?.title }</h2>
                    <p className={ styles.carousel_text } >{ edge?.text }</p>
                </div>
            </div>
            </div>
        )) }
        
    </div>

    {/* <div className={[styles.image_container]} >
                <img className={ styles.card_img } src={"/TAC_LOGO.PNG"} alt=""/>
                <img className={ styles.card_img } src={"/TAC_LOGO.PNG"} alt=""/>
                <img className={ styles.card_img } src={"/TAC_LOGO.PNG"} alt=""/>
                <img className={ styles.card_img } src={"/TAC_LOGO.PNG"} alt=""/>
                <img className={ styles.card_img } src={"/TAC_LOGO.PNG"} alt=""/>
            </div> */}

</Container>
        
            

    </>
  )
}

export default All_labs;
