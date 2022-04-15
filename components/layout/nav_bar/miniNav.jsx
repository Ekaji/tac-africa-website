/* eslint-disable react/jsx-key */
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../../../styles/layout/miniNav.module.scss'


const MiniNav = ({activeLink}) => {
  return (
    <Container fluid >
      <Container >
      <div className={ styles.aboutUs_nav_container }> 
        <div className={ styles.aboutUs_nav }>
          <div>
            <span>
              <Link href='/'>
                <a>
                Home
                </a>
              </Link>
            </span>
            <span>
              <Link href='/about_us'>
                <a>
                About us
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
                <a>
                  become a volunteer
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