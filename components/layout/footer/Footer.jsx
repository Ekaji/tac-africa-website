/* eslint-disable react/jsx-key */
import styles from '../../../styles/layout/footer.module.scss'

export default function Footer() {

  return(
    <>
        <div className={styles.footer_support}>
      <div className={styles.footer_support__detail, styles.container_fluid}>
        <div className="row">
          <div className="col-sm-6">
            <div className="d-flex justify-content-end r-m-1  footer-justify">
              <i className=" 	fas fa-hand-holding-heart"></i>
              <p>Care about people and Africa wellbeing in bringing peace and positive co-elastance</p>
            </div>
          </div>


          <div className="col-sm-6">
            <div className="d-flex justify-content-start r-m-1 footer-justify footer-support__detail-button-container">
              <button className="btn-nsw btn-nsw-primary">Donate</button>
              <a><button className="btn-nsw btn-nsw-primary">Support</button></a>
            </div>
          </div>
        </div>


      </div>
    </div><div className={styles.footer_main}>
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-4">
              <div className={'d-flex', styles.footer_justify}>
                <div className={styles.footer_main__about}>
                  <h3>About <em>TAC</em></h3>
                  <p>TAC An NGO Obliged to bringing together Law Enforcement Agents, Academia and Subject Matter
                    Experts to curb technology aided crime</p>
                  <p>1 sleekseed crescent, Adjacent Royal Champion Assembly, Chikakore, kubwa, Abuja</p>
                  <p>Mail: contact@tacafrica.org</p>
                  <p>Tel:
                    +234 706 224 7581
                  </p>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex footer-justify">
                <div className={styles.footer_main__quicklinks, 'r_m_1f' }>
                  <h3>Quicklinks</h3>
                  <ul>
                    <li><a>HomePage</a></li>
                    <li><a>Drone Lab</a></li>
                    <li><a>Cyber Lab</a></li>
                    <li><a>Contact</a></li>
                    <li><a>About</a> </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={"d-flex", styles.footer_justify}>
                <div className={styles.footer_main__socials, "r-m-1f"} >
                  <h3>Socials</h3>
                  <div>
                    <a className="fab fa-facebook" href="https://web.facebook.com/tacafrica.org/"></a>
                    <a className="fab fa-twitter" href="https://twitter.com/tacafrica"></a>
                    <a className="fab fa-instagram" href="https://www.instagram.com/technologyagainstcrime/"></a>
                    <a className="fab fa-linkedin" href="https://www.linkedin.com/company/29341224/"></a>
                  </div>

                  {/* <img src="" alt=""  /> */}
                  </div>

              </div>
            </div>
          </div>

        </div>
      </div><div className={styles.footer_bottom}>
        <div className="container-fluid">
          <p>Copyright © 2020 Technology Against Crime. All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}