/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import styles from '../styles/componentStyles/aboutUs.module.scss'

export default function AboutUs() {

  return(
    <main className="container-fluid">
    <section>
        <div className={styles.tac_top_about}>
            <div className="row">
                <div className="col-md-6">
                    <div className={styles.tac_top_about__text}>
                        <p>
                            Technology Against Crime (TAC) is an NGO born out of an International Forum on Technologies, a high level meeting
                            dedicated to <em>Technology for a Safer world</em>. The first two editions were held in
                            Lyon, in
                            April 2013 and April 2016 respectively under the patronage of the Ministry of Interior and
                            INTERPOL. <a href="">(www.forum-tac.org)</a>.
                        </p>

                        <p>
                            TAC Africa again was appointed member of the prestigious <em>Drone Expert Forum</em>, which
                            brought together nearly 100
                            experts from law enforcement, academia and private industry to demonstrate how drones can at
                            the same time be a threat,
                            particularly for critical infrastructure, a tool and source of evidence for Law Enforcement
                            operation worldwide.
                        </p>

                        <p>
                            Organized by the <em>INTERPOL</em>  Innovation Centre and Counter-Terrorism unit with the support of
                            the US <em>Federal Bureau of Investigation</em>(FBI) and the Netherlands Police, the conference was
                            a first step towards developing the global capacity to deal with the emerging threat posed
                            by ‘unmanned aerial systems’ known as drones.
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="tac-top-about__img">
                        <img className="img-fluid" src="/tac-ngo-africa.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

  )
}