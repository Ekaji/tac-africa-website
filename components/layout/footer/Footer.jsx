/* eslint-disable react/jsx-key */
import { useState, useCallback } from 'react';
import Link from 'next/link';
import DropDownButton from '../../dropdownButton.jsx';
import { data } from '../../../pages/api/navLinks';

export default function Footer() {
  const [menuState, setMenuState] = useState(false);

  const toggleButton = useCallback(() => {
    setMenuState((menuState) => !menuState);
  }, []);

  return (
    <div>
      <div className="pt-12 pb-12 text-white bg-sweet_blue">
        <div className="container mx-auto sm:px-4 max-w-full ">
          <div className="container mt-md-5">
            <div className="flex flex-wrap ">
              <div className="md:w-1/3 pr-4 pl-4">
                <div className="flex">
                  <div className="max-w-xs">
                    <div>
                      <h3 className="font-bold text-xl text-white">
                        ABOUT US
                      </h3>
                      <p className="">
                      TAC Africa is wholly committed to developing the Africa’s Economic and Security space through Digital Specialized Skills and Capacity building for Academia, Law Enforcement Agencies, Government Organizations and individuals by serving as catalyst through which Emerging Technological Solutions could be thought in a structured and easy to learn methodology
                      </p>
                    </div>

                    <div className="">
                      <Link href="/">
                        <a style={{ color: 'white' }}>READ MORE</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 pr-4 pl-4">
                <div className="">
                  <div className="">
                    <h3 className="font-bold text-xl text-white uppercase">
                      Quicklinks
                    </h3>
                    <ul>
                      {data?.map(
                        ({ label, content, type, details }, i) =>
                          label != 'donate' ? (
                            <DropDownButton
                              label={
                                <>
                                  {' '}
                                  {content.length > 1 && (
                                    <> &#x2BC8; </>
                                  )}{' '}
                                  {label}
                                </>
                              }
                              content={content}
                              setMenuState={setMenuState}
                              menuState={menuState}
                              isFooter
                            />
                          ) : undefined
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 pr-4 pl-4">
                <div className="flex flex-wrap ">
                  <div className=" xl:w-full pr-4 pl-4">
                    <h3 className="w-full mt-0 mb-0 pt-0 pb-2 pl-0 pr-0 font-bold text-xl text-white uppercase">
                      get in touch
                    </h3>
                    <div className="">
                      <p className="text-sm mb-1 text-white">
                        TAC HQ: Plot 239 P.O.W Mafemi Crescent, Besides
                        Daily Trust Newspapers, Utako District, Abuja,
                        Nigeria. 900112
                      </p>
                      <hr className="w-4/5" />
                    </div>

                    {/* <div className="">
                      <p className="text-sm mb-1 text-white">
                        TAC Community Hub: No.1 Sleekseed Crescent,
                        Chikakore District, Kubwa, Abuja
                      </p>
                      <hr className="w-4/5" />
                    </div>

                    <div className="">
                      <p className="text-sm mb-1 text-white">
                        phone: +2349088559002  +2349088559001
                      </p>
                      <hr className="w-4/5" />
                    </div> */}


                    <div className="">
                      <p className="text-sm mb-1 text-white space-x-4 ">
                        phone:
                      <a className='text-white' href='tel:+2349088559001 '> +2349088559001</a>
                      <a className='text-white' href='tel:+2349088559002'> +2349088559002</a>
                      </p>
                      <hr className="w-4/5" />
                    </div>

                    <div className="">
                      <p className="text-sm mb-1 text-white space-x-4 ">
                        Whatsapp:
                        <a className='text-white' href="https://wa.me/+2349088559003" target="_blank"  rel="noreferrer"> +2349088559003</a>
                      </p>
                      <hr className="w-4/5" />
                    </div>

                    <div className="">
                      <p className="text-sm mb-1 text-white space-x-4 ">
                        <a className='text-white' href="https://www.youtube.com/@School-of-Hardknocks-NG" target="_blank"  rel="noreferrer"> Youtube</a>
                      </p>
                      <hr className="w-4/5" />
                    </div>

                    <div className="">
                      <p className="text-sm mb-1 text-white">
                        <a className='text-white' href="mailto:secretariat@tacafrica.org" target="_blank"  rel="noreferrer"> email: secretariat@tacafrica.org</a>                   
                      </p>
                      <hr className="w-4/5" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-6">
          {/* facebook */}
          <Link href={'https://m.facebook.com/pg/TACinAfrica/posts'}>
            <a target="_blank" rel="noreferrer">
              <i className="mx-4 fa fa-brands fa-facebook fa-2x text-white" />
            </a>
          </Link>
          <Link href={'https://www.instagram.com/tac.africa'}>
            <a target="_blank" rel="noreferrer">
              <i className="mx-4 fa fa-brands fa-instagram fa-2x text-white" />
            </a>
          </Link>
          <Link href={'https://ng.linkedin.com/company/tacafrica'}>
            <a target="_blank" rel="noreferrer">
              <i className="mx-4 fa fa-brands fa-linkedin fa-2x text-white" />
            </a>
          </Link>
          <Link href={'https://twitter.com/Tacafrica2'}>
            <a target="_blank" rel="noreferrer">
              <i className="mx-4 fa fa-brands fa-twitter fa-2x text-white " />
            </a>
          </Link>
          <Link href={'https://www.youtube.com/channel/UCsOPBwlkXfJspo22MJcC8NA'}>
            <a target="_blank" rel="noreferrer">
              <i className="mx-2 fa fa-brands fa-youtube fa-2x text-white " />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
