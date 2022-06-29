/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';

const CardSlider = () => {
  const data = [
    {
      title: 'Cyber Security & Cyber Defense', //https://www.pexels.com/photo/close-up-view-of-a-golden-coin-315788/
      image: '/projects/cyber_security.jpeg',
      text: 'The emergence of the internet has no doubt enhanced the way we live, work, socialize and transact business to a great extent but cyber criminals are taking un-due advantage...',
      link: '/cyber_security_and_cyber_defense',
    },
    {
      title: 'Drone & Counter Drone',
      image: '/projects/drone.jpeg',
      text: 'The future of aviation is gradually being powered by unmanned Aerial Vehicles if the good guys don’t get involve on time the bad guys would..',
      link: '/drone_and_counter_drone',
    },
    {
      title: 'Blockchain And Cryptocurrency',
      image: '/projects/blockchain.jpeg',
      text: 'With the growing number of individuals using the internet for business transaction, meeting, learning, gaming etc. The need to have a shared database cannot be overemphasized.',
      link: '/blockchain_and_crypto_lab',
    },
    {
      title: 'Artificial Intelligence And Robotics',
      image: '/projects/ai_and_robotics.jpg',
      text: 'AI & Robotics is an emerging technology that is gradually making traditional complex task easier through the use of Artificial Intelligence-controlled Robots (AI) AI – algorithm in the actual world and allows it to interact with materials in real time',
      link: '/artificial_intelligence_and_robotics',
    },
    {
      title: 'Technology For Social Good',
      image: '/community/5.jpg',
      text: 'We work on independent multi-disciplinary academic research and teach open and issue-oriented debate and evidence-based policymaking around new technologies like Cybersecurity, Artificial Intelligence',
      link: '/satellite_and_remote_sensing_lab'
    }
  ];

  return (
    <div className="w-full">
      <div className="pt-12 pb-20 mx-auto my-0 xl:px-12">
        <div className="flex justify-Center items-center  py-4 mx-auto capitalize">
          <h2 className="text-sweet_blue mx-auto pt-1.5 font-bold text-6xl">
            {' '}
            Our <span className="text-primary font-bold text-6xl ">Labs</span>
          </h2>
          {/* <Link href={'/all_labs'}>
            <a>
              <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                ALL LABS
              </button>
            </a>
          </Link> */}
        </div>
        <>
          {/* carousel */}
          <div className="flex-grow w-full px-3 py-4 mx-auto sm:py-16">
            <div className="w-full lg:mx-auto px-">
              <div className="my-8 ">
                <div
                  id="scrollContainer"
                  className="flex flex-no-wrap items-stretch pb-6 mb-8 overflow-x-scroll scrolling-touch"
                >
                  {data.map((edge, i) => (
                    <div
                      key={i}
                      className="flex-none w-11/12 mr-8 overflow-hidden border rounded-lg md:w-2/4 lg:w-1/3 md:mr-4 md:pb-4"
                    >
                      <Link href={edge.link}>
                        <a className="space-y-4">
                          <div className="aspect-w-16 aspect-h-9 ">
                            <img
                              className="object-cover shadow-md hover:shadow-xl "
                              src={edge?.image}
                              alt={edge.image}
                            />
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
                          </div>
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
                        </a>
                      </Link>
                    </div>
                  ))}
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </>

        <Link href={'/all_labs'}>
            <a>
              <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                ALL LABS
              </button>
            </a>
          </Link>

      </div>
    </div>
  );
};

export default CardSlider;
