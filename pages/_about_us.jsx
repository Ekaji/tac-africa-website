/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import styles from '../styles/page.styles/aboutUs.module.scss'

export default function AboutUs() {
  return(
    <div className={styles.page_container} >
      <div className={styles.page_child}>
        {/* <div className={styles.page_hero_image}> */}
          <img src='/tac-ngo-africa.jpg' className={styles.page_hero_image} alt='tac-ngo-africa.jpg' />
        {/* </div> */}
        
        <h3 className={['text-primary', styles.page_child__heading].join(' ')} >About us</h3>
        <div>
          <p>
          Technology Against Crime (TAC) is an NGO born out of an International Forum on Technologies, a high level meeting dedicated to `&quot` Technology for a Safer world `&quot`. The first two editions were held in Lyon, in April 2013 and April 2016 respectively under the patronage of the Ministry of Interior and INTERPOL. (www.forum-tac.org).
          </p>
          <p>
          TAC Africa again was appointed member of the prestigious Drone Expert Forum, which brought together nearly 100 experts from law enforcement, academia and private industry to demonstrate how drones can at the same time be a threat, particularly for critical infrastructure, a tool and source of evidence for Law Enforcement operation worldwide.
          </p>
          <p>
          Organized by the INTERPOL Innovation Centre and Counter-Terrorism unit with the support of the US Federal Bureau of Investigation(FBI) and the Netherlands Police, the conference was a first step towards developing the global capacity to deal with the emerging threat posed by ‘unmanned aerial systems’ known as drones. 
          </p>
        </div>
      </div>
    </div>
  )
}