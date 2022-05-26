/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import styles from '../styles/page.styles/founder.module.scss'
import HeroBanner from '../components/layout/nav_bar/heroBanner.jsx'

const Founder = () => {

  const backgroundImg =  "/founder_banner.png";

  return(
    <>
      <HeroBanner bannerOverlay activeLink={'THE FOUNDER'} text={'The founder'} backgroundImg={ backgroundImg } />
        <div className={ styles.founder_container }>
        <div className={ styles.founder_container_inner }>
          <div className={ styles.founder_about }>
            <div className={ styles.founder_about_img }>
                <img src='/Jerry-Akubo-21.png' alt='founder' />
            </div>
            <div className={ styles.founder_about_info }>
              <h2 className='text-3xl font-bold text-deep_blue '>Dr. Jerry Akubo, <span className='text-xl'>CEH,CCI,MCITP,</span> </h2>
              <h2 className='text-xl font-semibold text-deep_blue' >CEO</h2>
              <h1 className='font-bold text-4xl mb-12 text-sweet_blue'> Technology Against Crime Initiative, Africa (TAC Africa)</h1>
              <p>Dr. Jerry Akubo founded TAC Africa as a futurist oriented, Law Enforcement Centric NGO, borne out of an International Forum on Technologies – a high level meeting dedicated to Technologies for a Safer World, co-organized by INTERPOL and the Ministry of Interior in Lyon, France in 2013.  The NGO was officially registered in Abuja, Nigeria in 2016.  Prior to this, he worked over a decade and half as the National Technical Officer for INTERPOL NCB Abuja under the auspices of the Nigeria Police Force.</p>

              <p>Dr. Akubo has been recognized by the INTERPOL Global Complex for Innovation and the Directorate of Innovation Center, Singapore for his exemplary service, partnership and contributions having actively attended and participated in over eight (8) INTERPOL General Assemblies and Eight (8) INTERPOL World Congress in a roll amongst other high level technical meetings and presentation he organized on extending INTERPOL Secured Communications Network to authorized Law Enforcement Agencies across the African Region.
</p>

            </div>

          </div>
          <div className={ styles.founder_details }>
              <p>He is a frequent speaker on Emerging Technologies and the maximal utilization of INTERPOL tools by Law Enforcement Agencies within the African Region while pushing a number of research and developmental projects to improve the technical know-how and easy accessibility of tools and technologies for Law Enforcement Agents especially the front line officers. 
              </p>

              <p>
              Dr. Akubo is an evangelist on the use of Innovative Aerial Surveillance, remote sensing and emerging technology to tackle most unique set of challenges the African region is facing including on the one side. Transnational Organized Cyber Crime and on the other, battling insurgents and terrorist group often domiciled in very remote & inaccessible locations.
              </p>

          </div>

      </div>
      </div>
    </>
  )
}

export default Founder;






