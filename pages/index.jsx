/* eslint-disable react/jsx-key */
import Head from 'next/head'
import dynamic from 'next/dynamic'
import LandingPage from '../components/landingPage.jsx'
// import Welcome from '../components/welcome.jsx'
import OurLabs from '../components/ourLabs.jsx'
// import Drive from '../components/drive.jsx'
import LatestProjects from '../components/latestProjects.jsx'
import JoinUs from '../components/joinUs.jsx'
// import VideoPlayer from '../components/videoPlayer/video'

const VideoPlayer = dynamic(() => import('../components/videoPlayer/video.jsx'), { ssr: false })


export default function Home() {
  return (
    <div >
      <Head>
        <title>TAC Africa</title>
        <meta name="description" content="TAC Africa Website" />
        <link rel="icon" href="/TAC_LOGO.png" />
      </Head>
      <LandingPage />
      <OurLabs />
      <VideoPlayer />
      <JoinUs />
    </div>
  )
}
