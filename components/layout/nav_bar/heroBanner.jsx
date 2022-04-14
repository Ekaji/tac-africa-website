/* eslint-disable react/jsx-key */
import styles from '../../../styles/layout/heroBanner.module.scss'
import MiniNav from './miniNav'

const HeroBanner = ({ backgroundImg, text }) => {


  return(
    <>
      <div className={ styles.ourTeam_hero } style={{ background: backgroundImg  }} >
        <h2>{text}</h2>
      </div>
      <MiniNav />
    </>
  )
}

export default HeroBanner