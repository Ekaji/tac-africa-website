/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Button_ from '../components/button';
import Link from 'next/link';
import { useState } from 'react';

const CardSlider = () => {

  const data = [
    {
      title: 'Cyber Security & Cyber Defense', //https://www.pexels.com/photo/close-up-view-of-a-golden-coin-315788/
      image: '/cyber_defence.jpg',
      text: 'The emergence of the internet has no doubt enhanced the way we live, work, socialize and transact business to a great extent but cyber criminals are taking un-due advantage...',
      link: '/cyber_security_and_cyber_defense',
    },
    {
      title: 'Drone & Counter Drone',
      image: 'Blog_Drones.jpg',
      text: 'The future of aviation is gradually being powered by unmanned Aerial Vehicles if the good guys don’t get involve on time the bad guys would..',
      link: '/drone_and_counter_drone',
    },
    {
      title: 'Blockchain And Payment Gateways',
      image: 'piles-coins-with-plant-front-graph.jpg',
      text: 'With the growing number of individuals using the internet for business transaction, meeting, learning, gaming etc. The need to have a shared database cannot be overemphasized.',
      link: '/blockchain_and_crypto_lab',
    },
    {
      title: 'Artificial Intelligence And Robotics',
      image: '/ai_and_robotics.jpg',
      text: 'AI & Robotics is an emerging technology that is gradually making traditional complex task easier through the use of Artificial Intelligence-controlled Robots (AI) AI – algorithm in the actual world and allows it to interact with materials in real time',
      link: '/artificial_intelligence_and_robotics',
    },
    // {
    //   title: 'satellite and remote sensing',
    //   image: 'satellite.jpg',
    //   text: 'Advanced satellite systems for locating, tracking and monitoring remote assets. Simple, flexible and affordable solutions.',
    //   link: '/satellite_and_remote_sensing_lab'
    // }
  ];

  return (
    <div className="w-full">
      <div className="pt-12 pb-20 mx-auto my-0 ">
        <div className="flex justify-between w-10/12 py-4 mx-auto capitalize">
          <h2 className="text-sweet_blue font-semibold pt-1.5">
            {' '}
            Our <span className="text-primary ">Labs</span>
          </h2>
          <Link href={'/all_labs'}>
            <a>
              <Button_
                title={
                  <span className="font-semibold">ALL LABS</span>
                }
                variant={'outline-primary'}
              />
            </a>
          </Link>
        </div>
        <>
          {/* carousel */}
          <div className="flex-grow w-full px-3 py-4 mx-auto sm:py-16">
            <div className="w-full lg:mx-auto px-">
              <div className="my-8 ">
                <div
                  id="scrollContainer"
                  className="flex flex-no-wrap items-start pb-6 mb-8 overflow-x-scroll scrolling-touch"
                >
                  {data.map((edge, i) => (
                    <div
                      key={i}
                      className="flex-none w-11/12 mr-8 overflow-hidden border rounded-lg md:w-2/4 lg:w-1/3 md:mr-4 md:pb-4"
                    >
                      <Link href={edge.link}>
                        <a className="space-y-4">
                          <div
                            className="aspect-w-16 aspect-h-9 "
                          >
                            <img
                              className="object-cover shadow-md hover:shadow-xl "
                              src={edge?.image}
                              alt={edge.image}
                            />
                            <div
                              className={`w-full h-full flex justify-center align-center hover:bg-overlay group `}
                            >
                              <div className='hidden my-auto group-hover:block'>

                              <Button_ title={'Learn More'} variant={'outline-light' } style={{border: '2px solid white'}} />
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
      </div>
    </div>
  );
};

export default CardSlider;
