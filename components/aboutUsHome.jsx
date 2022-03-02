/* eslint-disable react/jsx-key */
import styles from '../styles/component.styles/aboutUsHome.module.scss'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function AboutUsHome() {
  return(
      <section className={styles.inline_about, 'top-section'}>
          <div className="row">
              <div className="col-md-6">
                  <div className={ styles.about_details } >
                      <div >
                          <h2 className={styles.homepage_title} >About Us</h2>
                          <div className={ styles.about_details__p } >
                              <p>TAC AFRICA was born out of an International Forum on Technologies, a high level
                                  meeting dedicated to <em>Technology for a Safer world</em>. The first two editions were held
                                  in
                                  Lyon, in April 2013 and April 2016 respectively under the patronage of the Ministry of
                                  Interior and INTERPOL. <a href="http://www.forum-tac.com/">(www.forum-tac.org)</a>.</p>
                              <p>
                                  We were appointed member of
                                  the prestigious Drone Expert Forum, which
                                  brought together nearly 100 experts from law enforcement,
                                  academia and private industry
                                  to demonstrate how drones can at the same time be a
                                  threat, particularly for critical
                                  infrastructure, a tool and source of evidence for Law Enforcement operation worldwide.
                              </p>
                          </div>

                          <Nav.Item className={ styles.button_comp } >
                            <Button variant="outline-primary">Learn More</Button>
                          </Nav.Item>
                      </div>

                  </div>
              </div>
              <div className="col-md-6">
                  <div className={styles.about_vids } >
                      <a id="play-video" className={styles.video_play_button} data-toggle="modal" data-target="#InlineAboutModalCenter">
                          <span></span>
                      </a>

                      {/* <!-- Modal --> */}
                      <div className="modal fade" id="InlineAboutModalCenter" role="dialog"
                          aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div style={{maxWidth: '580px'}} className="modal-dialog modal-dialog-centered" role="document">
                              <div className="modal-content">
                                  <div className="modal-header">
                                      <h5 className="modal-title" id="exampleModalLongTitle">Founder Of TAC</h5>
                                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div className="modal-body">
                                      <iframe width="100%" height="315" src="https://www.youtube.com/embed/3JodbHot1PI" frameBorder="0"
                                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}