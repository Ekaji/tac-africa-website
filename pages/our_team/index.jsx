/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import { data } from '../api/teamData';
import { Container, Col, Row, Card } from 'react-bootstrap';
import styles from '../../styles/page.styles/ourTeam.module.scss';
import { ConditionalLinks } from '../../components/conditionalLinks';
import HeroBanner from '../../components/layout/nav_bar/heroBanner';

export default function OurTeam() {
  const SplitPhrase = ({ name }) => {
    let newArray = name.split(' ');
    let firstWord = newArray[0];
    let secondWord = newArray[1];
    return (
      <div>
        <h2 className={styles.splitPhrase}>
          {firstWord + '  '}
          <span className="text-primary">{secondWord || undefined }</span>
        </h2>
      </div>
    );
  };

  const backgroundImg = '/team/about_us1.jpg';

  return (
    <Container fluid className={styles.ourTeam_container_main}>
      <HeroBanner
        activeLink={'meet our team'}
        text={'meet our team'}
        bannerOverlay
        backgroundImg={backgroundImg}
      />
      <Container>
        <div className={styles.ourTeam_container}>
          {data.map(({ NAME, description, members }, idx) => (
            <>
              <div
                className={[styles.ourTeam_advisoryBoard].join(' ')}
                key={NAME}
              >
                <SplitPhrase name={NAME} />
              </div>

              <div
                className={[styles.card_container__outer].join(' ')}
              >
                {
                    <div className='  mx-auto'>
                      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-16 lg:grid lg:grid-cols-3">
                          {
                            members.map(({name, image, alt, description}) => (
                              <div className="w-full rounded shadow-2xl">
                              <img src={image}
                                  alt={alt}
                                  className='object-cover w-full h-[400px]'
                              />
                                  <div className=' bg-white p-4'>
                                      <h3 className='mb-2 font-semibold text-main_blueleading'>{name}</h3>
                                      <p className='text-sm text-gray-700'>
                                      {description}
                                      </p>
                                  </div>
                          </div>
                            )  )
                          }                               
                      </div>
                    </div>
                }
              </div>
              
            </>
          ))}
        </div>
      </Container>
    </Container>
  );
}
