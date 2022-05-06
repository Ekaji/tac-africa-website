/* eslint-disable react/jsx-key */
import styles from '../../../styles/layout/footer.module.scss'
import CustomDropdown from '../../../components/customDropdown.jsx'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'



export default function Footer() {


  return(
    <div>
    <div className={styles.footer_main}>
        <div className="container-fluid">
          <div className="container mt-md-5">

          <Row >
            <Col md={4} >
              <div className='d-flex'>
                <div className={ styles.footer_main__about }>

                  <div>
                    <h3 className={ styles.footer_header } >ABOUT US</h3>
                    <p className={ styles.footer_text } >
                      TAC An NGO Obliged to bringing together Law Enforcement Agents, Academia and Subject Matter
                      Experts to curb technology aided crime
                    </p>
                  </div>


                    <div className={ styles.footer_more } >
                      <Link href='/' >
                        <a  >READ MORE</a>
                      </Link>
                    </div>
                </div>

              </div>
            </Col>
            <Col md={4} >
              <div className="">
                <div className={ styles.footer_main__quicklinks }>
                  <h3 className={ styles.footer_header }>Quicklinks</h3>
                  <ul>
                    <CustomDropdown dropDownPosition={'end'} />
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={4}  >
              {/* <div className={["d-flex", styles.footer_justify].join(' ')}> */}
                <Row>
                  {/* <Col md={6}  >
                    <h3 className={ styles.footer_main__socials_header } >blog</h3>
                    <div className=''>
                      <p className={styles.contact_text_medium}>drone show event photos</p>
                      <p className={styles.contact_text_small}>12/07/22</p>
                      <hr className={ styles.line_style } />
                    </div>

                    <div className=''>
                      <p className={styles.contact_text_medium}>drone show event photos</p>
                      <p className={styles.contact_text_small}>12/07/22</p>
                      <hr className={ styles.line_style } />
                    </div>

                    <div className=''>
                      <p className={styles.contact_text_medium }>drone show event photos</p>
                      <p className={styles.contact_text_small}>12/07/22</p>
                    </div>
                  </Col> */}

                  <Col md={10}>
                {/* <div className={ styles.footer_main__socials } > */}
                  <h3 className={ styles.footer_main__socials_header } >get in touch</h3>
                {/* </div> */}
                <div className=''>
                    <p className={styles.contact_text_medium }>address: Plot 239 Mafemi Crescent, Besides Daily Trust Newspapers, Utako District, Abuja, Nigeria. 900112</p>
                    {/* <p className={styles.contact_text_small}>Abuja, Nigeria. 900112</p> */}
                    <hr className={ styles.line_style } />
                  </div>

                  <div className=''>
                    <p className={styles.contact_text_medium }>phone: +234 706 224 7581</p>
                    <hr className={ styles.line_style } />
                  </div>

                  <div className=''>
                    <p className={styles.contact_text_medium}>email: secretariat@tacafrica.org</p>
                    <hr className={ styles.line_style } />
                  </div>
                </Col>

                </Row>
              {/* </div> */}
              {/* <div className='row' style={{marginTop: '3em'}}> */}
                {/* <div className='col-md-6'>
                  <div className=''>
                    <p className={styles.contact_text_medium}>drone show event photos</p>
                    <p className={styles.contact_text_small}>12/07/22</p>
                    <hr className={ styles.line_style } />
                  </div>

                  <div className=''>
                    <p className={styles.contact_text_medium}>drone show event photos</p>
                    <p className={styles.contact_text_small}>12/07/22</p>
                    <hr className={ styles.line_style } />
                  </div>

                  <div className=''>
                    <p className={styles.contact_text_medium }>drone show event photos</p>
                    <p className={styles.contact_text_small}>12/07/22</p>
                  </div>
                </div> */}

                {/* <div className='col-md-6'>
                <div className={ styles.footer_main__socials } >
                  <h3 className={ styles.footer_main__socials_header } style={{textAlign: 'right'}}>get in touch</h3>
                </div>
                <div className=''>
                    <p className={styles.contact_text_medium }>address: Abuja, Nigeria. 900112</p>
                    <p className={styles.contact_text_small}>Abuja, Nigeria. 900112</p>
                    <hr className={ styles.line_style } />
                  </div>

                  <div className=''>
                    <p className={styles.contact_text_medium }>phone: +234 706 224 7581</p>
                    <hr className={ styles.line_style } />
                  </div>

                  <div className=''>
                    <p className={styles.contact_text_medium}>email: Secretariat@tacafrica.org</p>
                    <hr className={ styles.line_style } />
                  </div>
                </div> */}

              {/* </div> */}
            </Col>
          </Row>
          </div>


        </div>
      </div>
      {/* <div className={styles.footer_bottom}>
        <div className="container-fluid">
          <p>Copyright © 2020 Technology Against Crime. All Rights Reserved</p>
        </div>
      </div> */}
    </div>
  )
}