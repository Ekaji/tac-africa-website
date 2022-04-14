/* eslint-disable @next/next/no-img-element */

/* eslint-disable react/jsx-key */
import { Container, Row, Col } from 'react-bootstrap'
import HeroBanner from '../components/layout/nav_bar/heroBanner'

const Volunteer = () => {
  const backgroundImg = "url('')"
  return(
    <>
      <Container fluid>
        <HeroBanner text={'volunteer'} backgroundImg={ backgroundImg }/>
      </Container>
      <Container>
        <Row>
          <Col md={5}  > 
            <img src='/' alt='volunteer' />
          </Col>
          <Col md={7}  > 
          
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Volunteer