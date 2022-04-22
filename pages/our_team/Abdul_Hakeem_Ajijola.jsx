/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import styles from '../../styles/page.styles/founder.module.scss'
import HeroBanner from '../../components/layout/nav_bar/heroBanner'

export default function Abdul_Hakeem_Ajijola () {

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
              <h2 className={ styles.founder_header } >Abdul-Hakeem Ajijola</h2>
              <p>Abdul-Hakeem Ajijola (AhA), a global Cybersecurity resource is ranked #1 IFSEC 2020
                Global Cybersecurity professionals’ influencers and thought leaders list.
              </p>

              <p> He has attended several development programmes both in Nigeria and abroad including an
                  Executive Program on Science, Technology and Innovation Policy at the prestigious Harvard
                  University, John F. Kennedy School of Government. He also has special certifications
                  from the MIS Training Institute, Massachusetts MA, USA in Large Scale Computer Forensics,
                  Incident Response, International Security in the Interconnected World and The Forum
                  on Information Warfare.
              </p>

            </div>

          </div>
          <div className={ styles.founder_details }>
              <p>
                  He is Certificated on Digital Forensics with Forensics Recovery Evidence Device (FRED) by
                  Digital Intelligence, Inc., USA, and Cyber Security Capability & Capacity Building certification
                  by Cybersecurity Malaysia. Abdul-Hakeem is the Chairman, Consultancy Support Services
                  (CS2) Ltd., a Cyber Security, eLibrary, and Information Communication Technology
                  Policy Consultancy Firm, in Abuja, Nigeria. He is working to kick-start the development of
                  an Africa Cybersecurity Economic sub sector employing thousands of knowledge workers,
                  below 35 years of age, who will profitably drive Cybersecurity solutions value chains.
              </p>

              <p>
                He is also:
                - Chair, Nigerian National Cybersecurity Policy and Strategy review committee,
                - Chair, Nigeria Computer Society, Cybersecurity Advisory Group.
                - Member, Presidential Committee on the Development of National Broadband Plan.
                - Member, Group of Experts for the Nigerian Senate Committee on Cybersecurity, and ICT.
                - Resource person, National Defence College, Abuja.
              </p>

          </div>

      </div>
      </div>
    </>
  )
}
