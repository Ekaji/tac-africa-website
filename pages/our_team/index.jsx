/* eslint-disable @next/next/no-img-element */
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
  console.log(data[0].name)

  const backgroundImg = "url('/Rectangle 70.jpg')"
  
  return(
    <Container fluid className={ styles.ourTeam_container_main }>
      <HeroBanner text={'meet our team'} backgroundImg={backgroundImg} />
      <Container className={ styles.ourTeam_container } >
        {data.map(( { NAME, description, members } ) => (
          <>
            <div className={ styles.ourTeam_advisoryBoard } key={ NAME } >
             <SplitPhrase name={ NAME } />
              {/* <p className='col-md-8 p-0'>{description}</p> */}
            </div>
            <div className='d-flex, justify-content-center'  >

            <Row className={['d-flex', 'justify-content-start',  styles.card_container__outer].join(' ')} >
            {members.map(({image, name, title, description, link}, i) =>  (
               <Col md={4}>
                  <Card  key={i} className={['m-4', styles.card_container__inner ].join(' ')}  >

                    <ConditionalLinks //adds an optional <Link href={...}> tag around cards with a link
                          condition={link} 
                          wrapper={ children => <Link href={link} key={name} ><a>{children}</a></Link> } >
                      {/* <Card.Img variant="top" src={image} className={styles.card_container__inner__image} /> */}

                      {/* <div style={{width: 'auto', display: 'inline-block'}} > */}
                        <img src={image} alt={image} style={{width: '100%', height: '261px' }} />
                      {/* </div> */}

                      <Card.Title className='text-primary' style={{height: '60px'}} >
                        {name}
                      </Card.Title>

                        <div className={['text-primary',  styles.card_container__inner__colored__text].join(' ')} >
                          {title}
                        </div>
                      {
                      
                      NAME == 'Advisory Board' &&
                      <>

                        <div className={['text-dark', styles.card_container__inner__colored__text__d].join(' ')}>
                          {description}
                        </div>
                      </>
                      }
                    </ConditionalLinks>
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