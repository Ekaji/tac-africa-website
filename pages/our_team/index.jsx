/* eslint-disable react/jsx-key */
import Link from 'next/link'
import { data } from '../api/teamData'
import { Container, Col, Row, Card } from 'react-bootstrap'
import styles from '../../styles/page.styles/ourTeam.module.scss'
import { ConditionalLinks } from '../../components/conditionalLinks'
import HeroBanner from '../../components/layout/nav_bar/heroBanner'


export default function OurTeam() {

  const SplitPhrase = ({name}) => {
    let newArray = name.split(' ');
    let firstWord = newArray[0];
    let secondWord = newArray[1]; 
    return (
    <h2 style={{color: '#144388', textTransform: 'uppercase', fontWeight: '600'}} >
       { firstWord + '  ' } 
      <span className='text-primary'>
        { secondWord || '' }
      </span>
    </h2> )
  }

  const backgroundImg = "url('/Rectangle 70.jpg')"
  
  return(
    <Container fluid className={ styles.ourTeam_container_main }>
      <HeroBanner text={'meet our team'} backgroundImg={backgroundImg} />
      <Container className={ styles.ourTeam_container } >
        {data.map(( { name, description, members } ) => (
          <>
            <div className={ styles.ourTeam_advisoryBoard } key={name} >
             <SplitPhrase name={ name } />
              {/* <p className='col-md-8 p-0'>{description}</p> */}
            </div>
            <div className='d-flex, justify-content-center'  >

            <Row className={['d-flex', 'justify-content-start',  styles.card_container__outer].join(' ')} >
            {members.map(({image, name, title, description, link}, i) =>  (
              <Col md={4}>
                  <Card key={i} className={['m-4', styles.card_container__inner ].join(' ')}  >
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}} > {/* delete this line*/}

                    <ConditionalLinks //adds an optional <Link href={...}> tag around cards with a link
                          condition={link} 
                          wrapper={ children => <Link href={link} key={name} ><a>{children}</a></Link> } >
                      <Card.Img variant="top" src={image} className={styles.card_container__inner__image} />

                      <Card.Title className='text-primary' >
                        {name}
                      </Card.Title>

                      <div className={['text-primary',  styles.card_container__inner__colored__text].join(' ')}>
                        {title}
                      </div>

                      <div className={['text-dark', styles.card_container__inner__colored__text].join(' ')}>
                        {description}
                      </div>
                    </ConditionalLinks>
                </div>  {/* delete this line*/}
                  </Card>
              </Col>

              
            ) 
            )}
            </Row>
            </div>
          </>
        )
      )
    }
    </Container>
  </Container>
     
  )
}