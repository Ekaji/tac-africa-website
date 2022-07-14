/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import VideoComp from '../components/videoPlayer/video';
import Link from 'next/link';
import FormModal from './formModal';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { ConditionalLinks } from '../components/conditionalLinks';

const PDFcomp = ({ children, pdfs }) => {
  const [modalShow, setModalShow] = useState(false);
  const [PDF, setPDF] = useState('');

  return (
    <>
      <FormModal
        PDF={PDF}
        setPDF={setPDF}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
      <a
        className="inline-flex items-center cursor-pointer text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          setModalShow(!modalShow);
          setPDF(pdfs);
        }}
      >
        {children}
        <svg
          className="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </>
  );
};

export default function LatestNews({ text2 }) {
  const data = [
    {
      title:
        'Bilic Partners With TAC Africa on the use of technology Against Crime',
      media: {
        type: 'image',
        url: '/partnership/blic_tac.jpg',
      },
      text: "To bloster blockchain and cryptocurrency investigation capabilities, we're pleased to announce a strategic partnership with bilic.io on multiple fronts",
      blogLink: '/blog/Bilic_Partners_With_TAC_africa_on_the_use_of_technology_against_crime',
    },
    {
      title: 'TAC Africa Prevent | Detect | Investigate', //https://www.pexels.com/photo/close-up-view-of-a-golden-coin-315788/
      media: {
        type: 'video',
        url: '/video/TAC_AFRICA_MAIN_COMP.mp4',
        thumbnail: '',
      },
      text: 'Law enforcement officials today are facing a challenging and demanding operating environment. As society is increasingly connected and the world becoming Borderers',
      link: '/cyber_security_and_cyber_defense',
    },
    {
      title: 'IDES2022 ',
      media: {
        type: 'video',
        url: '/video/1656000831010.mp4',
        thumbnail: '',
      },
      text: 'IDES2022 -  Here are some of the highlights from INTERPOL Drone Expert Summit, organized by UAS Norway in great partnership with INTERPOL and the Norwegian Police. 350 participants fromlaw enforcement 👮 & public safety, from 50 nations🌐 gathered in Oslo for three days this week',
      link: '/drone_and_counter_drone',
    },
    {
      title: 'INTERPOL DRONE COUNTERMEASURE EXERCISE REPORT',
      media: {
        type: 'pdf',
        url: '/projects/IDB.PNG',
        downloadLink: '/pdf/CUAS_Interpol_Low_Final.pdf',
      },
      text: 'The Drone Incursion Exercise and the findings of this report represent cooperation between INTERPOL, the nNorwegian Police and TEKDIR AS. The report aims to illustrate the preparatory phases, primary challenges, and tangible outcomes from the pre-test and testing phases of the drone incursion exercise to guide INTERPOL member countries in gaining insight and understanding when testing C-UAS technologies and systems..',
      link: '/blockchain_and_crypto_lab',
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1536 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1536, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full">
      <div className={` pt-12 pb-20 mx-auto my-0 xl:px-12`}>
        <div className="flex justify-Center items-center  py-4 mx-auto capitalize">
          <h2 className="text-sweet_blue mx-auto pt-1.5 font-bold text-6xl">
            {' '}
            Latest{' '}
            <span className="text-primary font-bold text-6xl ">
              {' '}
              {text2}
            </span>
          </h2>
        </div>
        <div className="pl-4">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container "
            // removeArrowOnDeviceType={['tablet', 'mobile']}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            // deviceType={props.deviceType}
            dotListClass="relative pt-2  z-50"
            itemClass="carousel-item-padding-40-px flex flex-no-wrap items-stretch "
          >
            {data.map((edge, i) => (
              <div
                key={i}
                id={i.toString() + 'latestNews'}
                className={`   flex-none w-11/12 mr-8 overflow-hidden border  rounded-lg md:mr-4 md:pb-4`}
              >
                <div className=" ">
                  {edge.media.type == 'video' ? (
                    <VideoComp videoSrc={edge.media.url} />
                  ) : edge.media.type == 'pdf' ? (
                    <PDFcomp pdfs={edge.media.downloadLink}>
                      <img
                        className="object-cover shadow-md hover:shadow-xl "
                        src={edge?.media.url}
                        alt={edge?.media.url}
                      />
                    </PDFcomp>
                  ) :  (
                    <Link href={edge.blogLink}>
                      <a>
                      <img
                          className="object-cover shadow-md hover:shadow-xl "
                          src={edge?.media.url}
                          alt={edge?.media.url}
                        />
                      </a>
                    </Link>       
                  )}

                  <div
                    className={`w-full h-full flex justify-center align-center hover:bg-overlay group `}
                  >
                    <div className="hidden my-auto group-hover:block">
                      <button
                        type="button"
                        className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                      >
                        {'Learn More'}
                      </button>
                    </div>
                  </div>
                  {/* } */}
                </div>
                <ConditionalLinks //adds an optional <Link href={...}> tag around cards with a link
                          condition={edge.blogLink}
                          wrapper={(children) => (
                            <Link
                              href={edge.blogLink}
                              key={i}
                              className='m-0 p-0'
                            >
                              <a>{children}</a>
                            </Link>
                          )}
                        >
                <div className="px-4 py-2">
                  <div className="text-lg font-medium leading-6 text-center">
                    <h3 className="mt-4 mb-8 text-base font-semibold lg:font-bold text-sweet_blue">
                      {edge?.title}
                    </h3>
                  </div>
                  <div className="text-sm line-clamp-3 ">
                    <p className="text-center text-light_grey">
                      {edge?.text}
                    </p>
                  </div>
                </div>
                </ConditionalLinks>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
