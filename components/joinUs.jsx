/* eslint-disable react/jsx-key */
import { Container, Card, Row, Col } from 'react-bootstrap'
import styles from '../styles/component.styles/joinUs.module.scss'
import Link from 'next/link'

const JoinUs = () => {
  return(
    <div className={ styles.joinUs_main } >
      <div className={ styles.blur_background } style={{ width: '100vw', height: '100%'}}>
        <Container className={ 'my-auto'} >
          <Row>
            <Col md={6} className={ styles.joinUs_card__large_container } > 
              <div className={ styles.joinUs_card__large } >
                <Card >
                    <div style={{margin : '0px 1.5em'}}>
                  <Card.Body>
                      <Card.Text className='text-primary'>
                        Want to join with us?
                      </Card.Text>
                      <Card.Title className={ styles.card_large__title }  >Become a proud volunteer!</Card.Title>
                      <p className={ styles.card_large__text }>
                      TAC Africa volunteers are representative of our communities. We are always looking for more volunteers with diverse experiences, like people living in rural areas, people of color and of all races.
                      </p>

                        <Link href={'/volunteer'}>
                          <a>
                            <button className={ styles.block_button }>join us today</button> 
                          </a>
                        </Link>
                    </Card.Body>
                    </div>
                </Card>
              </div>
            </Col>
            <Col md={6} className={ styles.joinUs_card__small_container } >
              <Row  className={ styles.card_small_main } >
                <Col xs={6} >
                  <Card className={['mb-3', styles.joinUs_card__small].join(' ')} >
                    <Card.Title className='text-light m-0'  as='h2' >55+</Card.Title>
                    <Card.Text className={ styles.card_small__text } >
                      community members 
                    </Card.Text>
                  </Card>
                </Col>

                <Col xs={6} >
                  <Card className={['mb-3', styles.joinUs_card__small].join(' ')} >
                      <Card.Title className='text-light m-0' as='h2' >17+</Card.Title>
                      <Card.Text className={ styles.card_small__text } >
                        African partners 
                      </Card.Text>
                  </Card>
                </Col>

                <Col xs={6} >
                  <Card className={['mt-3', styles.joinUs_card__small].join(' ')} >
                    <Card.Title className='text-light m-0' as='h2' >23+</Card.Title>
                    <Card.Text className={ styles.card_small__text } >
                      Trainings and hackathons 
                    </Card.Text>
                  </Card>
                </Col>

                <Col xs={6} >
                  <Card className={['mt-3', styles.joinUs_card__small].join(' ')} >
                    <Card.Title className={['text-light m-0', styles.joinUs_card_small__title].join(' ') } as='h2' >8+</Card.Title>
                    <Card.Text className={ styles.card_small__text } >
                      SMEs incubated 
                    </Card.Text>
                  </Card>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default JoinUs;