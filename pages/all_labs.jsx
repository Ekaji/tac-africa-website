 /* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Container, Form, Row, Col} from 'react-bootstrap'
// import Styles from '../styles/page.styles/allLabs.module.scss'
import Button_ from '../components/button.jsx'
import Link from 'next/link'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

import styles from '../styles/component.styles/ourLabs.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const All_labs = () => {

    const data =  [
        {
          title: 'Cyber Security & Cyber Defense',  //https://www.pexels.com/photo/close-up-view-of-a-golden-coin-315788/
          image: '/cyber defence.jpg',
          text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.',
          link: '/cyber_security_and_cyber_defense',
        },
        {
          title: 'Artificial Intelligence And Robotics',
          image: '/ai and robotics.jpg',
          text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.',
          link: '/artificial_intelligence_and_robotics',
        },
        {
          title: 'Blockchain And Payment Gateways',
          image: 'piles-coins-with-plant-front-graph.jpg',
          text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.',
          link: '/blockchain_and_crypto_lab',
        },
        {
          title: 'Drone & Counter Drone',
          image: 'pexels-dids-3657268.jpg',
          text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.',
          link: '/drone_and_counter_drone',
        },
        
    
      ]
    

  const backgroundImg =  "/advisory board.png";

  return(
    <>
      <HeroBanner activeLink={'THE FOUNDER'} text={'About us'} backgroundImg={ backgroundImg } />


      <Container style={{paddingTop: '3em', paddingBottom: '5em'}} >

<div className={ ['d-flex justify-content-between text-uppercase ', styles.carousel_header__component].join(' ')} >
  <h2 className={ styles.carousel_container__title } > Our <span className='text-primary ' >Labs</span></h2>
  <Button_ title={'ALL LABS'} variant={'outline-primary'} />
</div>

    { data.map((edge, i) => (
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
    )) }
</Container>


        {/* <div className='ex text-center'>
            <p>Below are a selection of projects that we have partnered with and fully support their community development goals. Featured Projects. Blockchain & Payment Gateways</p>
        </div>


        <div className={"row padding"}>
				<div className={"col-md-4"}>
					<div className={"card text-center"}>
						<img className={"card-img"} src={"/drone and counter drone.png"} alt=""></img>
						<div className={"card-body"}>
							<h4>Cyber Security & Cyber Defence</h4>
							<p>Major technological disruptions, like artificial intelligence and machine learning, are their way to the industrial robotics industry.</p>
						</div>
					</div>
				</div>

                <div className={"col-md-4"}>
					<div className={"card text-center"}>
						<img className={"card-img"} src={"/drone and counter drone.png"} alt=""></img>
						<div className={"card-body"}>
							<h4>Cyber Security & Cyber Defence</h4>
							<p>Major technological disruptions, like artificial intelligence and machine learning, are their way to the industrial robotics industry.</p>
						</div>
					</div>
				</div>

                <div className={"col-md-4"}>
					<div className={"card text-center"}>
						<img className={"card-img"} src={"/drone and counter drone.png"} alt=""></img>
						<div className={"card-body"}>
							<h4>Cyber Security & Cyber Defence</h4>
							<p>Major technological disruptions, like artificial intelligence and machine learning, are their way to the industrial robotics industry.</p>
						</div>
					</div>
				</div>
    
                <div className={"col-md-4"}>
					<div className={"card text-center"}>
						<img className={"card-img"} src={"/drone and counter drone.png"} alt=""></img>
						<div className={"card-body"}>
							<h4>Cyber Security & Cyber Defence</h4>
							<p>Major technological disruptions, like artificial intelligence and machine learning, are their way to the industrial robotics industry.</p>
						</div>
					</div>
				</div>
    
                <div className={"col-md-4"}>
					<div className={"card text-center"}>
						<img className={"card-img"} src={"/drone and counter drone.png"} alt=""></img>
						<div className={["card-body", styles.card_body__h4].join(' ')}>
							<h4 className=''>Cyber Security & Cyber Defence</h4>
							<p>Major technological disruptions, like artificial intelligence and machine learning, are their way to the industrial robotics industry.</p>
						</div>
					</div>
				</div>
    
        </div> */}






    </>
  )
}

export default All_labs;
