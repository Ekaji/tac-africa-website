/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import VideoComp from '../components/videoPlayer/video'
import Link from 'next/link'
import Button_ from '../components/button'



const OngoingProjects = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <div className='mx-auto w-10/12 text-center mb-12 lg:w-7/12'>
        <h2 className='text-sweet_blue font-bold' >Ongoing <span className='text-primary'> Projects </span> </h2>
        <p className='text-sm lg:text-lg' >TAC Africa through her collaborations and partnerships curate, develop projects to help organization and industries benefit from emerging technology</p>
      </div>
      <div className='flex flex-col'>

        <div className='flex flex-col lg:flex-row '>
                   
          <div className='w-full lg:mr-4 lg:w-6/12 rounded-sm overflow-hidden '>
            <VideoComp />
          </div>
          <div className='lg:w-5/12 mx-auto'>
            <div>
              <h2 className='text-sweet_blue font-bold text-xl'>Institute For Remotely Piloted Aircraft Systems (IRPAS)</h2>
              <p className='text-xs  lg:text-base'>prides itself as well-established industry leader in drone and counter drone systems, with its headquarters in FCT Abuja Nigeria and an international office in. Lagos, Nigeria. We are at the forefront of the security industry and are proud to provide quality Emerging Technology and Security Services & Solutions tailored to meet our clients’ needs across various industries</p>
            </div>
            
            <div>
              <Link href={'/'}>
                <a>
                  <Button_ title={'read more'} />
                </a>
              </Link>
            </div>

          </div>
        </div>

        <div className='flex flex-col-reverse lg:flex-row mt-10'>

          <div className='flex flex-col lg:w-6/12 lg:flex-row md:mt-10'>
            <div className='mr-4 ' > 
              <h2 className='text-sweet_blue font-bold text-xl' >TAC Community Hub</h2>
              <p className='text-xs lg:text-base'>
              TAC Community hub is a cutting edge hub for sports, Research and development activities. It is located in the suburb of Abuja. The community hub compliments the TAC Headquarters in the Federal Capital Territory, Abuja Nigeria.
              </p>
                <div>
                <Link href={'/'}>
                  <a>
                    <Button_ title={'read more'} />
                  </a>
                </Link>
              </div>
            </div>

          </div>

          <div className='lg:ml-4 lg:w-6/12 mx-auto'>
            <div className='lg:aspect-w-16 lg:aspect-h-9 rounded-sm overflow-hidden'>
              <img src='/community/1.jpg' alt='community hub' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OngoingProjects;