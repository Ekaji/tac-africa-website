
 /* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import styles from '../../styles/page.styles/founder.module.scss'
import HeroBanner from '../../components/layout/nav_bar/heroBanner'

export default function PJingram() {

  const backgroundImg =  "/advisory board.png"

  return(
    <>
      <HeroBanner activeLink={'ADVISORY BOARD'} text={'About us'} backgroundImg={ backgroundImg } />
        <div className={ styles.founder_container }>
        <div className={ styles.founder_container_inner }>
          <div className={ styles.founder_about }>
            <div className={ styles.founder_about_img }>
                <img src='' alt='ADVISORY BOARD' />
            </div>
            <div className={ styles.founder_about_info }>
              <h1 className={ styles.founder_header_main }>ADVISORY BOARD</h1>
              <h2 className={ styles.founder_header } >Phillip .J Ingram</h2>
              <p>
                  Philip is a widely published journalist, specializing in the security and intelligence
                  arenas who has built a long and senior career in British Military Intelligence, with
                  years of experience in all aspects of intelligence and security as well as strategic planning.
              </p>

              <p> He presents and interview on screen, with the output being delivered to large organizations
                  such as INTERPOL. Philip have commentated for BBC TV News and Radio,
                  BBC Mundo, TRT World, CNN, ABC, CBC, Japanese NTV, RT.com and many others as
                  well as presenting INTERPOL World TV.
              </p>

              <p>
                  He retain other business interests in the armored vehicle and specialist molecular detection,
                  and specialist Cyber Intelligence where he Chairs a company. He is frequently
                  quoted in the mainstream press.
              </p>

            </div>

          </div>
          <div className={ styles.founder_details }>
              <p>
                  His broad experience sets him up as a perfect chair for conferences and round-tables
                  and He have been a speaker at dinner events stirring up a little debate amongst the
                  diners where appropriate and at a number of high-level round-table and spotlight
                  events. He is a PTSD survivor.
              </p>

              <p>
                  Specialties: Journalism (print, online and video), business mentoring, marketing, risk
                  management, change management, SEO, writing, presenting, podcasting and interviewing;
                  with a splash of cyber security and cyber intelligence.
              </p>

          </div>

      </div>
      </div>
    </>
  )
}
