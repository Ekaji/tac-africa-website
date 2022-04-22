/* eslint-disable react/jsx-key */
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../../../styles/layout/miniNav.module.scss'


const MiniNav = ({activeLink}) => {
  return (
    <Container fluid  >
      <Container >
      <div className={ styles.aboutUs_nav_container }> 
        <div className={ styles.aboutUs_nav }>
          <div>
            <span>
              <Link href='/'>
                <a style={{color: '#144388'}} >
                {'Home  ' }&nbsp; &#x003E;
                </a>
              </Link>
            </span>
            <span>
              <Link href='/about_us'>
                <a style={{color: '#144388'}} >
                {"About us"} &nbsp; &#x003E;
                </a>
              </Link>
            </span>
            <span>
              <Link href='/about_us'>
                <a>
                {activeLink}
                </a>
              </Link>
            </span>
          </div>
          <div>
            <span>
              <Link href='/'>
                <a >
                  {'become a volunteer ' + '  '}&nbsp; <span style={{fontWeight: 'bold'}}> &#x29C1; </span> 
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
      </Container >
      <hr className={styles.hr} />
    </Container >

  )
}

export default MiniNav;