/* eslint-disable @next/next/no-img-element */

/* eslint-disable react/jsx-key */
import { Container, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import HeroBanner from '../components/layout/nav_bar/heroBanner'
import styles from '../styles/page.styles/volunteer.module.scss'
import Button_ from '../components/button.jsx'

const Volunteer = () => {
  const backgroundImg = '/volunteer rect.png'
  return(
    <>
      <Container fluid>
        <HeroBanner activeLink={'VOLUNTEER'} text={'volunteer'} backgroundImg={ backgroundImg }/>
      </Container>
      <Container className={ styles.volunteer_about_container_main } >
        <Row>
          <Col md={5}  > 
            <img className={ styles.volunteer_img } src='/volunteer.jpg' alt='volunteer' />
          </Col>
          <Col md={7}  > 
            <div className={ styles.volunteer_about_container } >
              <h2 className={ styles.volunteer_header }>WAYS TO VOLUNTEER</h2>
              <p className={['text-primary', styles.volunteer_text ].join(' ')}>Essentially, we are a non-governmental, bipartisan organization, connecting law enforcement, subject matter experts, civil society to solve issues that affect our society. We work on the transformation of our law enforcement and judiciary. We make them more technologically enabled.</p>
            </div>

            <div className={ styles.volunteer_content_container } >
              <div className={ styles.volunteer_content_container_inner } >
                <h4 className={ styles.volunteer_content_header }  > work on site : </h4>
                <p className={ styles.volunteer_content_text }  >individuals can voluntarily visit our head office and get engaged with various activities.</p>
              </div>

              <div className={ styles.volunteer_content_container_inner } >
                <h4 className={ styles.volunteer_content_header }   > work part time : </h4>
                <p className={ styles.volunteer_content_text }  >You can choose to get flexible by getting engages with activities only on specific days of the week.</p>
              </div>

              <div className={ styles.volunteer_content_container_inner } >
                <h4 className={ styles.volunteer_content_header }   > volunteer{`'`}s : </h4>
                <p className={ styles.volunteer_content_text }  >Users can explore creative opportunities by working remotely and get connected through video calls and webinars</p>
              </div>
          </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2 className={ styles.volunteer_member_header } >become a <span className='text-primary' >member</span></h2>
        <Row>
          <Col >
            <Row>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="name" placeholder="Your Name" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="name" placeholder="Your Nationality" />
                </Form.Group>
              </Col>

            </Row>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="name" placeholder="Your Availability" />
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="name" placeholder="Your Address (including postcode)" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="name" placeholder="What Would You Like To Do?" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Row>

              <Col md={6} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="name" placeholder="Phone Number " />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="name" placeholder="Email" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="name" placeholder="Gender" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="name" placeholder="Age" />
                </Form.Group>
              </Col>

            </Row>
          </Col>

          <Col md={6}>
            <InputGroup>
              <FormControl style={{height: '120px !important',}} placeholder="Experience learning and skills"  as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Col>
          
        </Row>
        <div className={ styles.volunteer_submitButton }>
          <Button_  title={"submit now"}  variant="primary" type="submit"/>
        </div>
      </Container>
    </>
  )
}

export default Volunteer