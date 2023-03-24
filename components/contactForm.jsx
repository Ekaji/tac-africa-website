/* eslint-disable react/jsx-key */
import {
  faPhone,
  faLocationDot,
  faPaperPlane,
  faGlobeAfrica,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";

export default function Contact( ) {


  return (
    <div>
      <section className=" p-[10rem] ">
        <div className="lg:w-[70vw] ">
          <div className="flex justify-center ">
            <div className="flex flex-col lg:w-10/12 md:w-full ">
              <div className=" w-full shadow-lg shadow-gray-500/50 lg:rounded-lg">
                <div className="flex flex-wrap -mr-4 -ml-4 no-gutters">
                  <div className="relative w-full pr-4 pl-4 flex items-stretch lg:max-w-[58.33333%]">
                    <div className="bg-white w-full p-md-5 p-4">
                      <div className="flex justify-between mb-3">
                        <h3 id='contact' className="mb-4 text-2xl font-semibold">
                          Get in touch
                        </h3>
                          <Link href={'/pdf/get in touch.pdf'} >
                            <a
                              className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 "
                            >
                              Download Form
                            </a>
                          </Link>
                      </div>
                      <form
                        className="mc__form"
                        action="https://api.web3forms.com/submit" method="POST" 
                      >
                        <input type="hidden" name="access_key" value="46af3412-e39b-45b9-8a58-d74ce05bbfac" />
                        <div className="flex flex-wrap -mr-4 -ml-4 p-0 m-0 ">
                          <div className="flex md:flex-col w-6/12 mb-4 pr-1 m-0">
                            {/* <div className="mb-4 w-4/12 "> */}
                            <input
                              className="h-12 w-full  text-black text-sm rounded-sm shadow-none bg-white border border-[rgba(0,0,0,0.1)]"
                              type="text"
                              name="first_name"
                              placeholder="First Name"
                              required
                            />
                            {/* </div> */}
                          </div>

                          <div className="flex md:flex-col w-6/12 mb-4 pr-1 m-0">
                            {/* <div className="mb-4 w-4/12 "> */}
                            <input
                              className="h-12 w-full  text-black text-sm rounded-sm shadow-none bg-white border border-[rgba(0,0,0,0.1)]"
                              type="text"
                              name="last_name"
                              placeholder="Last Name"
                              required
                            />
                            {/* </div> */}
                          </div>

                          <div className="flex md:flex-col w-full  mb-4 m-0">
                            {/* <div className="mb-4 w-full "> */}
                            <input
                              className="h-12 w-full text-black text-sm rounded-sm shadow-none bg-white border border-[rgba(0,0,0,0.1)]"
                              type="email"
                              name="email"
                              placeholder="Email"
                              required
                            />
                            {/* </div> */}
                          </div>
                          <div className="flex md:flex-col w-full p-0 m-0">
                            <div className="mb-4 w-full">
                              <input
                                type="text"
                                className="h-12 w-full text-black text-sm rounded-sm shadow-none bg-white border border-[rgba(0,0,0,0.1)]"
                                name="subject"
                              placeholder="Subject"
                              required
                              />
                            </div>
                          </div>
                          <div className="flex md:flex-col w-full p-0 m-0">
                            <div className="mb-4">
                              <textarea
                                className="h-48 w-full text-black text-sm rounded-sm shadow-none bg-white border border-[rgba(0,0,0,0.1)]"
                                cols="30"
                                rows="7"
                                name="message"
                                placeholder="Message"
                                required
                              ></textarea>
                            </div>
                          </div>

                          <div className="flex md:flex-col w-full p-0 m-0">
                            <div className="mb-4">
                              <button
                                type="submit"
                                value="submit"
                                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 "
                              >
                                Send Message 
                              </button>
                              <div className="float-left w-full hidden text-base font-bold py-2 px-0"></div>

                            </div>

                            
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className=" flex  md:flex-col lg:w-5/12 items-stretch ">
                    <div className="grow -my-6 text-white bg-primary w-full p-10 lg:rounded-lg">
                      <h3 className="mb-4 mt-6 text-white text-3xl font-semibold">
                        Contact us
                      </h3>
                      <div className="w-full mb-6 flex items-start ">
                        <div className=" px-4 py-3 w-1 text-xl rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                          <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <div className="pl-3">
                          <p className="text-white text-sm">
                            <span className="text-lg font-semibold">
                              Address:
                            </span>{' '}
                            Plot 239 Mafemi Crescent, Besides Daily
                            Trust Newspapers, Utako District, Abuja,
                            Nigeria. 900112
                          </p>
                        </div>
                      </div>
                      <div className="w-full mb-6 flex items-start">
                        <div className=" px-4 py-3 w-1 text-xl rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className=" pl-3">
                          <p className="text-white text-sm">
                            <span className="text-lg font-semibold">
                              Phone:
                            </span>{' '}
                            <a
                              className="text-white"
                              href="tel://1234567920"
                            >
                              +234 706 224 7581
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="w-full mb-6 flex items-start">
                        <div className=" px-4 py-3 w-1 text-xl rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                          <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                        <div className=" text-white pl-3">
                          <p className="text-white text-sm">
                            <span className="text-lg font-semibold">
                              Email:
                            </span>{' '}
                            <a
                              className="text-white"
                              href="mailto:info@yoursite.com"
                            >
                              secretariat@tacafrica.org
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="w-full mb-6 flex items-start">
                        <div className="px-4 py-3 w-1 text-xl rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                          <FontAwesomeIcon icon={faGlobeAfrica} />
                        </div>
                        <div className=" pl-3">
                          <p className="text-white text-sm">
                            <span className="text-lg font-semibold">
                              Website:
                            </span>{' '}
                            <Link href="/">
                              <a className="text-white">
                                tacafrica.org
                              </a>
                            </Link>
                          </p>
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
  );
}
