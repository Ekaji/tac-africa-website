/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { Player, BigPlayButton } from 'video-react';
// import styles from '../../styles/video.styles/video.module.scss'

const VideoComp = props => {
  return (
    <Player poster="/vid_thumbnail.png" src="/video/TAC_video.mp4" >
      <BigPlayButton position="center" />
    </Player>
  );
};

export default VideoComp;