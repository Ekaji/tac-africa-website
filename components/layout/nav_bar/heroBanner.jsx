/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import styles from '../../../styles/layout/heroBanner.module.scss'
import MiniNav from './miniNav'

const HeroBanner = ({ backgroundImg, text, activeLink }) => {


  return(
    <>
      {/* <div className={ styles.ourTeam_hero }  > */}
      {
      backgroundImg ?
        <img src={backgroundImg} alt='ai and robotics' style={{width: '100%'}} className={ styles.heroBanner_img }/>
        :
        <h2>{text}</h2>
      }
      {/* </div> */}
      <MiniNav activeLink={activeLink}   />
    </>
  )
}

export default HeroBanner