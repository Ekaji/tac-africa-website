/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import { Container } from 'react-bootstrap'
import Button_ from '../components/button'
import styles from '../styles/component.styles/latestProjects.module.scss'

const data =  [
  {
    title: 'Cyber Security & Cyber Defense',
    image: 'https://cdn.pixabay.com/photo/2022/03/24/08/52/bird-7088667__340.jpg',
    text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.'
  },
  {
    title: 'Artificial Intelligence And Robotics',
    image: 'https://cdn.pixabay.com/photo/2022/03/24/14/42/animal-7089224_960_720.jpg',
    text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.'
  },
  {
    title: 'Blockchain And Payment Gateways',
    image: 'https://cdn.pixabay.com/photo/2022/03/07/18/41/forest-7054278_960_720.jpg',
    text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.'
  },
  // {
  //   title: 'Drone & Counter Drone',
  //   image: 'https://cdn.pixabay.com/photo/2021/12/09/11/47/river-6858013_960_720.jpg',
  //   text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.'
  // },
  

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
                          <Button_ title={'view project'} variant={'outline-light' } style={{border: '2px solid white'}} />
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