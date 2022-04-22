
 /* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import styles from '../../styles/page.styles/founder.module.scss'
import HeroBanner from '../../components/layout/nav_bar/heroBanner'

export default function Prof_Boniface_K_Alese() {

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
              <h2 className={ styles.founder_header } >Prof_Boniface_K_Alese</h2>
              <p>
                Prof B. K. Alese is a Professor of Information and Cyber Security with over two decades
                of teaching, research and community service experience. He holds a PhD degree in
                Computer Science with specialization in Information Security from The Federal University
                of Technology Akure in 2004.
              </p>

              <p> 
                He started his academic career in 1998 at the Federal University of Technology, Akure
                and rose to become a full Professor in 2014. He has successfully supervised 18 PhD as
                a Major Supervisor and 27 as a Co-Supervisor apart from many others at Masters level.
              </p>

              <p>
                He has held different positions in the University such as Head of Department, Associate
                Director and Dean of Students’ Affairs. He has mentored and led students of the
                University to win laurels in IT related competitions at both local and International
                levels.
              </p>

            </div>

          </div>
          <div className={ styles.founder_details }>
              <p>
                He is visiting Professor to the University of Mines and Technology, Tarkwa, Ghana. He
                is the President of Technology Against Crime, Cybercrime Expert Group, Africa Sub
                Region. He is member of various Professional bodies both locally and internationally
                such as , Nigeria Computer Society, Institute of Electrical and Electronics Engineering
                (Computer Society) New York, Association for Computing Machinery; New York,
                Computer Professional of Nigeria (CPN), Cyber Security Experts Association of Nigeria,
                Information Systems Security Association, Virginia, United States, Information
                Systems Audit and Control Association, United States of America, Cyber Peace Foundation,
                Cyber Peace Corps and Technology Against Crime, Africa Sub-Region.
              </p>

              <p>
                 He was member of National University Commission BMAS drafting Committee for
                Cyber Security and Information Technology as courses of study in Nigeria.
              </p>

          </div>

      </div>
      </div>
    </>
  )
}
