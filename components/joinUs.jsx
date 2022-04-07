/* eslint-disable react/jsx-key */
import { Container, Card, Row, Col } from 'react-bootstrap'
import styles from '../styles/component.styles/joinUs.module.scss'
import Button_ from '../components/button'

const JoinUs = () => {
  return(
    <Container fluid className={ styles.joinUs_main }>
      <Container className={ 'my-auto'} >
        <Row>
          <Col md={6} cla > 
            <div className={ styles.joinUs_card__large } >
              <Card >
                <Card.Body>
                  <Card.Text className='text-primary'>
                    Want to join with us
                  </Card.Text>
                  <Card.Title className={ styles.card_large__title}  >Become a proud volunteer</Card.Title>
                  <Card.Text className={ styles.card_large__text}>
                  TAC AFRICA was born out of an International Forum on Technologies, a high level meeting dedicated to Technology for a Safer world was born out of an International Forum on Technologies, a high level meeting dedicated to Technology 
                  </Card.Text>
                  <Button_ variant="primary" title={'join us today'} />
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={6} className='d-flex align-content-between ' >
            <Row  >
              <Col md={6}  >
                <Card className={['mb-3', styles.joinUs_card__small].join(' ')} >
                  <Card.Title className='text-light m-0'  as='h2' >25</Card.Title>
                  <Card.Text className={ styles.card_small__text } >
                    community members 
                  </Card.Text>
                </Card>
              </Col>

              <Col md={6} >
                <Card className={['mb-3', styles.joinUs_card__small].join(' ')} >
                  <div s>
                    <Card.Title className='text-light m-0' as='h2' >17+</Card.Title>
                    <Card.Text className={ styles.card_small__text } >
                      African partners 
                    </Card.Text>
                  </div>
                </Card>
              </Col>

              <Col md={6} >
                <Card className={['mt-3', styles.joinUs_card__small].join(' ')} >
                  <Card.Title className='text-light m-0' as='h2' >23</Card.Title>
                  <Card.Text className={ styles.card_small__text } >
                    Trainings and hackathons 
                  </Card.Text>
                </Card>
              </Col>

              <Col md={6} >
                <Card className={['mt-3', styles.joinUs_card__small].join(' ')} >
                  <Card.Title className='text-light m-0' as='h2' >8+</Card.Title>
                  <Card.Text className={ styles.card_small__text } >
                    SMEs incubated 
                  </Card.Text>
                </Card>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default JoinUs;