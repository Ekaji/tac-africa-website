/* eslint-disable react/jsx-key */
import { faPhone, faLocationDot, faPaperPlane, faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button_ from '../components/button.jsx'
// fa-facebook

export default function Contact() {
  
  return(
    <div>
      <section className=" p-[10rem]">
        <div className="container">
          <div className="flex justify-center">
            <div className="flex flex-col lg:w-10/12 md:w-full ">
              <div className=" w-full shadow-lg shadow-gray-500/50">
                <div className="flex flex-wrap -mr-4 -ml-4 no-gutters">
                  <div className="relative w-full pr-4 pl-4 flex items-stretch md:max-w-[58.33333%]" >
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Get in touch</h3>
                      <div id="form-message-warning" className="mb-4"></div> 
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form method="POST" id="contactForm" name="contactForm">
                        <div className="flex flex-wrap -mr-4 -ml-4">
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
                              {/* <Button_ type="submit" title={"Send Message"} variant={'outline-primary'}  /> */}
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