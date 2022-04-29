/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import styles from '../styles/component.styles/ourLabs.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button_ from '../components/button'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const OurLabs = () => {

  const data =  [
    {
      title: 'Cyber Security & Cyber Defense',  //https://www.pexels.com/photo/close-up-view-of-a-golden-coin-315788/
      image: '/cyber defence.jpg',
      text: 'The emergence of the internet has no doubt enhance the way we live, work, socialize and transact business to a great extent but cyber criminals are taking un-due advantage...',
      link: '/cyber_security_and_cyber_defense',
    },
    {
      title: 'Artificial Intelligence And Robotics',
      image: '/ai and robotics.jpg',
      text: 'AI & Robotics is an emerging technology that is gradually making traditional complex task easier through the use of Artificial Intelligence-controlled Robots (AI) AI – algorithm in the actual world and allows it to interact with materials in real time',
      link: '/artificial_intelligence_and_robotics',
    },
    {
      title: 'Blockchain And Payment Gateways',
      image: 'piles-coins-with-plant-front-graph.jpg',
      text: 'With the growing number of individuals using the internet for business transaction, meeting, learning, gaming etc. The need to have a shared database cannot be overemphasized.',
      link: '/blockchain_and_crypto_lab',
    },
    {
      title: 'Drone & Counter Drone',
      image: 'Blog_Drones.jpg',
      text: 'The future of aviation is gradually being powered by unmanned Aerial Vehicles if the good guys don’t get involve on time the bad guys would..',
      link: '/drone_and_counter_drone',
    },
    // {
    //   title: 'satellite and remote sensing',
    //   image: 'satellite.jpg',
    //   text: 'Advanced satellite systems for locating, tracking and monitoring remote assets. Simple, flexible and affordable solutions.',
    //   link: '/satellite_and_remote_sensing_lab'
    // }
  ]


  const responsive = {
    superLargeDesktop: { // the naming can be any, depends on you.
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 5
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3
    },
       widescreen: {
      breakpoint: {
          max: 1024,
          min: 577
      },
      items: 2
  },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    }
}


  return(
    <Container fluid className={ [ styles.carousel_container ].join(' ')} >

      <Container style={{paddingTop: '3em', paddingBottom: '5em'}} >

        <div className={ ['d-flex justify-content-between text-uppercase ', styles.carousel_header__component].join(' ')} >
          <h2 className={ styles.carousel_container__title } > Our <span className='text-primary ' >Labs</span></h2>
          <Link href={'/all_labs'}>
            <a>
              <Button_ title={<span className={ styles.carousel_container_button__title }  >ALL LABS</span>} variant={'outline-primary'} />
            </a>
          </Link>
        </div>

        <Carousel responsive={responsive} 
                swipeable
                itemClass="carousel_item_padding_40_px"
                >
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
                        <h2 className={ styles.carousel_title } style={{fontSize: '3em !important'}} >{ edge?.title }</h2>
                        <p className={ styles.carousel_text } >{ edge?.text }</p>
                      </div>
                  </div>
            )) }
          </Carousel>
      </Container>

    </Container>
  )
}

export default OurLabs;