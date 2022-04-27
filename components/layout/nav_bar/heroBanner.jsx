/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import styles from '../../../styles/layout/heroBanner.module.scss'
import MiniNav from './miniNav'

const HeroBanner = ({ backgroundImg, text, activeLink, bannerOverlay }) => {


  return(
    <>
      {/* <div className={ styles.ourTeam_hero }  > */}
      {
        bannerOverlay ?
      <div className={ styles.banner} >
        
        <img src={backgroundImg} alt='ai and robotics' style={{width: '100%'}} className={ styles.heroBanner_img }/>

        <div className={ styles.banner_overlay } >
          <div className={ styles.banner_text } >
              <h2> {text} </h2>
          </div>
        </div>

      </div>
        :
        <img src={backgroundImg} alt='ai and robotics' style={{width: '100%'}} className={ styles.heroBanner_img }/>
      }
      {/* </div> */}
      <MiniNav activeLink={activeLink}   />
    </>
  )
}

export default HeroBanner