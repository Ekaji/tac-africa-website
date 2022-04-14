/* eslint-disable @next/next/no-img-element */

/* eslint-disable react/jsx-key */
import { Container, Row, Col } from 'react-bootstrap'
import HeroBanner from '../components/layout/nav_bar/heroBanner'
import styles from '../styles/page.styles/volunteer.module.scss'

const Volunteer = () => {
  const backgroundImg = "url('')"
  return(
    <>
      <Container fluid>
        <HeroBanner text={'volunteer'} backgroundImg={ backgroundImg }/>
      </Container>
      <Container className={ styles.volunteer_about_container_main } >
        <Row>
          <Col md={5}  > 
            <img src='/' alt='volunteer' />
          </Col>
          <Col md={7}  > 
            <div className={ styles.volunteer_about_container } >
              <h2 className={ styles.volunteer_header }>WAYS TO VOLUNTEER</h2>
              <p className={['text-primary', styles.volunteer_text ].join(' ')}>Essentially, we are a non-governmental, bipartisan organization, connecting law enforcement, subject matter experts, civil society to solve issues that affect our society. We work on the transformation of our law enforcement and judiciary. We make them more technologically enabled.</p>
            </div>

            <div className={ styles.volunteer_content_container } >
              <div className={ styles.volunteer_content_container_inner } >
                <h4 className={ styles.volunteer_content_header }  >WAYS TO VOLUNTEER : </h4>
                <p className={ styles.volunteer_content_text }  >Essentially, we are a non-governmental, bipartisan organization, Essentially, we are a non-governmental, bipartisan organisation, connecting law enforcement.</p>
              </div>

              <div className={ styles.volunteer_content_container_inner } >
                <h4 className={ styles.volunteer_content_header }   >WAYS TO VOLUNTEER : </h4>
                <p className={ styles.volunteer_content_text }  >Essentially, we are a non-governmental, bipartisan organization, Essentially, we are a non-governmental, bipartisan organisation, connecting law enforcement.</p>
              </div>

              <div className={ styles.volunteer_content_container_inner } >
                <h4 className={ styles.volunteer_content_header }   >WAYS TO VOLUNTEER : </h4>
                <p className={ styles.volunteer_content_text }  >Essentially, we are a non-governmental, bipartisan organization, Essentially, we are a non-governmental, bipartisan organisation, connecting law enforcement.</p>
              </div>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Volunteer