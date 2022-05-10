/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Player, BigPlayButton } from 'video-react';
import styles from '../../styles/video.styles/video.module.scss'

const VideoComp = props => {
  return (
    <Player src="/video/TAC_video.mp4" >
      <BigPlayButton position="center" />
    </Player>
  );
};


const Video = () => {
  return (
    <div className={ styles.video_component__container }>
      <div className={ styles.intro_component }>
        <h2 className={ styles.videoComp_header } >Ongoing Projects</h2>
        <p className={ styles.videoComp_text } >TAC Africa through her collaborations and partnerships curate, develop projects to help organization and industries benefit from emerging technology</p>
      </div>
      <div className={'row'}>
        <div className={ [' col-lg-6', styles.videoComp_container ].join(' ') }>
          <VideoComp />
        </div>
        <div className={['col-lg-6', styles.videoComp_container_details ].join(' ') }>
          <div>
            <h2 className={ styles.videoComp_header_inner } >Institute For Remotely Piloted Aircraft Systems (IRPAS)</h2>
            <p className={ styles.videoComp_text }>prides itself as well-established industry leader in drone and counter drone systems, with its headquarters in FCT Abuja Nigeria and an international office in. Lagos, Nigeria. We are at the forefront of the security industry and are proud to provide quality Emerging Technology and Security Services & Solutions tailored to meet our clients’ needs across various industries</p>
          </div>
          <div  >
            <h2 className={ styles.videoComp_header_inner } >Nuturing the future of UAVs</h2>
            <p className={ styles.videoComp_text }></p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Video;
       