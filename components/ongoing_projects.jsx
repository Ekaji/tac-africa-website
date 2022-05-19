/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import VideoComp from '../components/videoPlayer/video'
import styles from '../styles/component.styles/ongoingProjects.module.scss'
import Link from 'next/link'
import Button_ from '../components/button'
import { Col, Row} from 'react-bootstrap'



const OngoingProjects = () => {
  return (
    <div className={ styles.video_component__container }>
      <div className={ styles.intro_component }>
        <h2 className={ styles.mediaComp_header } >Ongoing Projects</h2>
        <p className={ styles.mediaComp_text } >TAC Africa through her collaborations and partnerships curate, develop projects to help organization and industries benefit from emerging technology</p>
      </div>
      <div className={['row', styles.mediaComp_container_main ].join(' ')}>
        
        <div className={ [' col-lg-6', styles.mediaComp_container ].join(' ') }>
          <VideoComp />
        </div>
        <div className={['col-lg-6', styles.mediaComp_container_details ].join(' ') }>
          <div>
            <h2 className={ styles.mediaComp_header_inner } >Institute For Remotely Piloted Aircraft Systems (IRPAS)</h2>
            <p className={ styles.mediaComp_text }>prides itself as well-established industry leader in drone and counter drone systems, with its headquarters in FCT Abuja Nigeria and an international office in. Lagos, Nigeria. We are at the forefront of the security industry and are proud to provide quality Emerging Technology and Security Services & Solutions tailored to meet our clients’ needs across various industries</p>
          </div>
          <div  >
            {/* <h2 className={ styles.mediaComp_header_inner } >Nuturing the future of UAVs</h2> */}
            <p className={ styles.mediaComp_text }></p>
          </div>

        </div>

        <div className={ [' col-lg-6', styles.mediaComp_container ].join(' ') }>
        {/* TAC Community Hub */}
        <Col  xs={{order: 'first'}}  > 
          <h2 className={ styles.mediaComp_header_inner } >TAC Community Hub</h2>
          <p>
          TAC Community hub is a cutting edge hub for sports, Research and development activities. It is located in the suburb of Abuja. The community hub compliments the TAC Headquarters in the Federal Capital Territory, Abuja Nigeria.
          </p>
          <div>
            <Link href={'/tac_communityHub'}>
              <a>
                <Button_ title={'read more'} />
              </a>
            </Link>
          </div>
        </Col>
        </div>
        <div className={['col-lg-6', styles.mediaComp_container_details ].join(' ') }>
    .
        </div>

      </div>
    </div>
  )
}

export default OngoingProjects;