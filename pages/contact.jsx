/* eslint-disable react/jsx-key */
import { faPhone, faLocationDot, faPaperPlane, faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button_ from '../components/button.jsx'

export default function Contact() {
  
  return(
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-7 d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Get in touch</h3>
                      <div id="form-message-warning" className="mb-4"></div> 
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form method="POST" id="contactForm" name="contactForm">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                            </div>
                          </div>
                          <div className="col-md-6"> 
                            <div className="form-group">
                              <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Message"></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <Button_ type="submit" title={"Send Message"} variant={'outline-primary'}  />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                      <h3 className="mb-4 mt-md-4">Contact us</h3>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon icon={ faLocationDot } />
                        </div>
                        <div className="text pl-3">
                          <p><span>Address:</span> 1 Sleekseed Crescent, Adjacent Royal Champion Assembly, Chikakore , Kubwa, Abuja</p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={ faPhone } />
                          {/* <span className="fa fa-phone"></span> */}
                        </div>
                        <div className="text pl-3">
                          <p><span>Phone:</span> <a href="tel://1234567920">+234 706 224 7581</a></p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={ faPaperPlane } />
                        </div>
                        <div className="text pl-3">
                          <p><span>Email:</span> <a href="mailto:info@yoursite.com">contact@tacafrica.org</a></p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={ faGlobeAfrica } />
                        </div>
                        <div className="text pl-3">
                          <p><span>Website:</span> <a href="#">tacafrica.org</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}