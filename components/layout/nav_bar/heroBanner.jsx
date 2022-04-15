/* eslint-disable react/jsx-key */
import styles from '../../../styles/layout/heroBanner.module.scss'
import MiniNav from './miniNav'

const HeroBanner = ({ backgroundImg, text, activeLink }) => {


  return(
    <>
      <div className={ styles.ourTeam_hero } style={{ background: backgroundImg  }} >
        <h2>{text}</h2>
      </div>
      <MiniNav activeLink={activeLink} />
    </>
  )
}

export default HeroBanner