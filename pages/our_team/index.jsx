/* eslint-disable react/jsx-key */
import Link from 'next/link'
import { data } from '../api/teamData'
import { Container, Row, Card } from 'react-bootstrap'
import styles from '../../styles/page.styles/ourTeam.module.scss'
import { ConditionalLinks } from '../../components/conditionalLinks'


export default function OurTeam() {

  
  return(
      <Container className={styles.container} >
        {data.map(({name, description, members}) => (
          <>
            <div className='' key={name} >
              <h2 className='text-primary'>{name}</h2>
              <p className='col-md-8 p-0'>{description}</p>
            </div>
            <div className='d-flex, justify-content-center' style={{width: '100vw'}}>

            <Row xs={1} md={3} xl={4} className={['d-flex', 'justify-content-start',  styles.card_container__outer].join(' ')} >
            {members.map(({image, name, title, description, link}, i) =>  (
              
            <Card key={i} className={['m-4', styles.card_container__inner ].join(' ')}  >

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
            </Card>
            ) 
            )}
            </Row>
            </div>
          </>
        )
      )
    }
    </Container>
  )
}