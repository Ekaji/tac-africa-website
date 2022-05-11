/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import { Accordion, Container, Form, Row, Col} from 'react-bootstrap'
import styles from '../styles/page.styles/aboutUs.module.scss'
import Button_ from '../components/button.jsx'
import Link from 'next/link'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'
import Drive from '../components/drive.jsx'

const NewAbout = () => {

  const data =  [
    {
      imgUrl: '/icons8-combo-chart-100 (1).png',
      title: 'Big Data Expert',
      text: 'With our team of AI experts & Big Data consultants, we help companies move into the AI and machine learning-powered age.'
    },
    {
      imgUrl: '/icons8-google-web-search-500.png',
      title: 'Research & Development',
      text: 'We constantly study to innovate and introduce new products and services or to improve our existing services'
    },
    {
      imgUrl: '/intelligence.png',
      title: 'Data Exchange & Inspection',
      text: 'Our professionals and digital consultants specializes in inspection and testing of digital products and infrastructures.'
    },
  ]


  const backgroundImg = '/about us.jpg'

  return(
    <>
      <Container fluid className={ styles.aboutUs_container } >
        <HeroBanner text={'About us'} bannerOverlay activeLink={'About us'}  backgroundImg={ backgroundImg } />

        <Container className={ styles.background_container }  >
          <h2 className={ styles.background_header }>our background </h2> 
          <p className={ styles.background_text }>
            TAC NGO AFRICA was born out of an International Forum on Technologies, a high level meeting dedicated to “Technology for a Safer world. The first two editions were held in Lyon France, in April 2013 and April 2016 respectively under the patronage of the Ministry of Interior and INTERPOL.</p>
            
            <p> Essentially, we are a non-governmental, bipartisan organisation, connecting law enforcement, subject matter experts, civil society to solve issues that affect our society. We work on the transformation of our law enforcement and judiciary. We make them more technologically enabled. Besides this, we solve problems through policy advocacy, research, training and capacity building and volunteering.
          </p>
        </Container>

        <Container fluid className={ styles.aboutUs_specialty_container_main } >
          <div className={ styles.aboutUs_specialty_mask } >
            <Container className={ styles.aboutUs_specialty_container } >
              {
                data.map(({ imgUrl, title, text }, i) => (
                  <div key={i} className={ styles.aboutUs_specialty } >
                    <img className={ styles.aboutUs_specialty__image } src={ imgUrl } alt={title} />
                    <h3 className={ styles.aboutUs_specialty__title } >{ title }</h3>
                    <p className={ styles.aboutUs_specialty__text }>{ text }</p>
                    <Button_ title={'learn more'} />
                  </div>
                ))
              }
            </Container>
          </div>
        </Container>

        <Container className={ styles.volunteer } >
        <Drive />
        <Row>
          <Col md={4} >
            <h3 className={ styles.volunteer__header__1 } >become a volunteer </h3>
            <Form>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="name" placeholder="your name" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="address" placeholder="your city" />
                </Form.Group>
                <Button_   title={"subscribe"}  variant="primary" type="submit" />
              </Row>
          </Form>

          </Col>
          <Col md={8}>
            <h3 className={ styles.volunteer__header__2 } >question / <span className='text-primary' > answers </span> </h3>
            <Accordion className={ styles.volunteer_accordion } >
              <Accordion.Item eventKey="0">
                <Accordion.Header className={ styles.volunteer_accordion__question } >
                  <span className={ styles.volunteer_accordion__question } >
                    What is the process of being a volunteer?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. */}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion >
            
            <Accordion className={ styles.volunteer_accordion } >
              <Accordion.Item eventKey="1">
                <Accordion.Header  >
                  <span className={ styles.volunteer_accordion__question } >
                    What information do i need to provide?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. */}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion >

            <Accordion className={ styles.volunteer_accordion } >
              <Accordion.Item eventKey="2">
                <Accordion.Header className={ styles.volunteer_accordion__question } >
                  <span className={ styles.volunteer_accordion__question } >
                    Would i receive some documentation?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. */}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion >
              

          </Col>
        </Row>
      </Container>
        
        <Container >
          <div className={ styles.subscribe }>
            <div className={ styles.subscribe_intro } >
              <h2 className={ styles.subscribe_intro__header } >subscribe for <span className='text-primary' >newsletter</span></h2>
              <p className={ styles.subscribe_intro__text }>Subscribe now and receive weekly newsletter with new events, interesting tech updates.</p>
            </div>
            <Form>
              <Row>
                <Col md={4}  >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Col>
                <Col md={4} >
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Col>
                <Col md={2} >
                  <Row>
                    <Button_   title={"subscribe"}  variant="primary" type="submit" />
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>


    {/* </div> */}
    </Container>
    </>

  )
}

export default NewAbout;
