/* eslint-disable react/jsx-key */
import styles from '../../../styles/layout/footer.module.scss'
import Button_ from '../../button.jsx'
import CustomDropdown from '../../../components/customDropdown.jsx'
import Link from 'next/link'



export default function Footer() {


  return(
    <div>
    <div className={styles.footer_main}>
        <div className="container-fluid">

          <div className="row ">
            <div className="col-md-4 ">
              <div className='d-flex justify-content-md-center'>
                <div className={styles.footer_main__about }>

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
            </div>
            <div className="col-md-4">
              <div className="">
                <div className={ [ styles.footer_main__quicklinks].join(' ') }>
                  <h3 className={ styles.footer_header }>Quicklinks</h3>
                  <ul>
                    <CustomDropdown dropDownPosition={'end'} />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={["d-flex", styles.footer_justify].join(' ')}>
                <div className={[ styles.footer_main__socials].join(' ')} >
                  <h3>get in touch</h3>
                  <div>
                    <a className="fab fa-facebook" href="https://web.facebook.com/tacafrica.org/"></a>
                    <a className="fab fa-twitter" href="https://twitter.com/tacafrica"></a>
                    <a className="fab fa-instagram" href="https://www.instagram.com/technologyagainstcrime/"></a>
                    <a className="fab fa-linkedin" href="https://www.linkedin.com/company/29341224/"></a>
                  </div>
                  </div>

              </div>
            </div>
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