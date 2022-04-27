/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import { Container } from 'react-bootstrap'
import Button_ from '../components/button'
import styles from '../styles/component.styles/latestProjects.module.scss'
import Link from 'next/link'

const data =  [
  {
    title: 'Cyber Security & Cyber Defense',
    image: '/pexels-shalom-de-león-6165167.jpg',
    link: '/cyber_security_and_cyber_defense',
    text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.'
  },
  {
    title: 'Artificial Intelligence And Robotics',
    image: '/piles-coins-with-plant-front-graph.jpg',
    link: 'artificial_intelligence_and_robotics',
    text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.'
  },
  {
    title: 'Blockchain And Payment Gateways',
    image: '/pexels-dids-3657268.jpg',
    link: '/blockchain_and_crypto_lab',
    text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.'
  },

]

const LatestProjects = () => {
  return(
    <Container >
      <h2 className={ styles.project_heading }> Latest <span className='text-primary '> Projects </span></h2>
      <div className={ styles.project_component_outer }> 
        { data.map((edge, i) => (
                <div key={i} className={styles.project_component_inner}  >
                    <div className={ styles.project_image }>
                      <img className={ styles.project_image } src={ edge?.image } alt={ edge.image } />
                      <div className={ styles.project_mask } >
                        <div className={ styles.project_button__container } >
                          <Link href={`/${edge.link}`} >
                            <a>
                              <Button_ title={'view project'} variant={'outline-light' } style={{border: '2px solid white'}} />
                            </a>
                          </Link>
                          <p className={ styles.project_title }> {edge?.title}</p>
                        </div>
                      </div>
                    </div>
                </div>
              )
            ) 
          }
      </div>

    </Container>
  )
}

export default LatestProjects;