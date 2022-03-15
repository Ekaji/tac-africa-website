/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import styles from '../styles/component.styles/getInvolved.module.scss'
import Link from 'next/link'


export default function CarouselComp() {
    return (
      <div className={styles.carousel_container} >
        <div>
            <h2 className={ styles.homepage_title } >How you can get 
              <button className={styles.homepage_button}>
                <em>
                  <Link href='/contact'  >
                    <a>
                    Involved
                    </a>
                  </Link>
                </em>
              </button>
            </h2>
        </div>
        <Carousel variant="dark">
          <Carousel.Item className={styles.carousel_items_padding} interval={1000}>
            <div className='row'>
              <div className='col-md-6' >
                <div className={ styles.labs_card } >
                  <div>
                    <img className="img-fluid" src="./drone-lab-icon.png" alt="" />
                  </div>
                </div>
              </div>
              <div className='col-md-6' >
              <div className={ styles.labs_card } >
                  <div>
                    <h3>Drone and Counter-Drone Lab</h3>
                    <p>A Virtual knowledge platform that will raise critical issues to promote the institutionalization
                        of drone and counter drone best practices within the African Sub-region. </p>

                    <Nav.Item className={ styles.button_comp } >
                        <Button variant="outline-primary" >Learn More</Button>
                    </Nav.Item>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carousel_items_padding} >
            <div className='row'>
              <div className='col-md-6' >
                <div className={ styles.labs_card } >
                  <div>
                    <img className="img-fluid" src="/syber-lab-icon.png" alt="" />
                  </div>
                </div>
              </div>
              <div className='col-md-6' >
                <div className={ styles.labs_card } >
                  <div>
                    <h3>Cyber Security Lab</h3>
                    <p>Lorem ipsum dorlo Lorem ipsum dorlo Lorem ipsum
                      dorlo Lorem i psum dorlo Lorem ipsum dorlo Lorem
                      ipsum dorlo Lorem ipsum dorlo Lorem ipsum
                      dorlo Lorem i psum dorlo Lorem ipsum dorlo 
                    </p>
                    <Nav.Item className={ styles.button_comp } >
                      <Button variant="outline-primary" >Learn More</Button>
                    </Nav.Item>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carousel_items_padding} >
            <div className='row'>
              <div className='col-md-6' >
                <div className={ styles.labs_card } >
                  <div>
                    <img className="img-fluid" src="/syber-lab-icon.png" alt="" />
                  </div>
                </div>
              </div>
              <div className='col-md-6' >
                <div className={ styles.labs_card } >
                  <div>
                    <h3>AI and Robotics Lab</h3>
                    <p>Lorem ipsum dorlo Lorem ipsum dorlo Lorem ipsum
                      dorlo Lorem i psum dorlo Lorem ipsum dorlo Lorem
                      ipsum dorlo Lorem ipsum dorlo Lorem ipsum
                      dorlo Lorem i psum dorlo Lorem ipsum dorlo 
                    </p>
                    <Nav.Item className={ styles.button_comp } >
                      <Button variant="outline-primary" >Learn More</Button>
                    </Nav.Item>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carousel_items_padding} >
            <div className='row'>
              <div className='col-md-6' >
                <div className={ styles.labs_card } >
                  <div>
                    <img className="img-fluid" src="/syber-lab-icon.png" alt="" />
                  </div>
                </div>
              </div>
              <div className='col-md-6' >
                <div className={ styles.labs_card } >
                  <div>
                    <h3>Blockchain and Crypto Lab</h3>
                    <p>Lorem ipsum dorlo Lorem ipsum dorlo Lorem ipsum
                      dorlo Lorem i psum dorlo Lorem ipsum dorlo Lorem
                      ipsum dorlo Lorem ipsum dorlo Lorem ipsum
                      dorlo Lorem i psum dorlo Lorem ipsum dorlo 
                    </p>
                    <Nav.Item className={ styles.button_comp } >
                      <Button variant="outline-primary" >Learn More</Button>
                    </Nav.Item>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carousel_items_padding} >
            <div className='row'>
              <div className='col-md-6' >
                <div className={ styles.labs_card } >
                  <div>
                    <img className="img-fluid" src="/syber-lab-icon.png" alt="" />
                  </div>
                </div>
              </div>
              <div className='col-md-6' >
                <div className={ styles.labs_card } >
                  <div>
                    <h3>Satellite And Remote Sensing Lab</h3>
                    <p>Lorem ipsum dorlo Lorem ipsum dorlo Lorem ipsum
                      dorlo Lorem i psum dorlo Lorem ipsum dorlo Lorem
                      ipsum dorlo Lorem ipsum dorlo Lorem ipsum
                      dorlo Lorem i psum dorlo Lorem ipsum dorlo 
                    </p>
                    <Nav.Item className={ styles.button_comp } >
                      <Button variant="outline-primary" >Learn More</Button>
                    </Nav.Item>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}