/* eslint-disable react/jsx-key */
import CustomDropdown from '../../../components/customDropdown.jsx'
import Link from 'next/link'



export default function Footer() {


  return(
    <div>
    <div className='pt-12 pb-12 text-white bg-sweet_blue'>
        <div className="container mx-auto sm:px-4 max-w-full ">
          <div className="container mt-md-5">

          <div className='flex flex-wrap ' >
            <div className='md:w-1/3 pr-4 pl-4'  >
              <div className='flex'>
                <div className='max-w-xs' >

                  <div>
                    <h3 className='font-bold text-xl text-white' >ABOUT US</h3>
                    <p className='' >
                      TAC An NGO Obliged to bringing together Law Enforcement Agents, Academia and Subject Matter
                      Experts to curb technology aided crime
                    </p>
                  </div>


                    <div className='' >
                      <Link href='/' >
                        <a style={{ color: 'white'}}  >READ MORE</a>
                      </Link>
                    </div>
                </div>

              </div>
            </div>
            <div className='md:w-1/3 pr-4 pl-4'  >
              <div className="">
                <div className=''>
                  <h3 className='font-bold text-xl text-white uppercase' >Quicklinks</h3>
                  <ul>
                    <CustomDropdown dropDownPosition={'end'} />
                  </ul>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 pr-4 pl-4'   >
                <div className='flex flex-wrap '>
                  

                  <div className='md:w-4/5 xl:w-full pr-4 pl-4' >
                  <h3 className='w-full mt-0 mb-0 pt-0 pb-2 pl-0 pr-0 font-bold text-xl text-white uppercase' >get in touch</h3>
                <div className=''>
                    <p className='text-sm mb-1 text-white'>address: Plot 239 Mafemi Crescent, Besides Daily Trust Newspapers, Utako District, Abuja, Nigeria. 900112</p>
                    <hr className='w-4/5'/>
                  </div>

                  <div className=''>
                    <p className='text-sm mb-1 text-white'>phone: +234 706 224 7581</p>
                    <hr className='w-4/5'/>
                  </div>

                  <div className=''>
                    <p className='text-sm mb-1 text-white'>email: secretariat@tacafrica.org</p>
                    <hr className='w-4/5'/>
                  </div>
                </div>

                </div>
              
            </div>
          </div>
          </div>


        </div>
      </div>
    </div>
  )
}