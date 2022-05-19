/* eslint-disable react/jsx-key */
import Head from 'next/head'
import dynamic from 'next/dynamic'
import LandingPage from '../components/landingPage.jsx'
import OurLabs from '../components/ourLabs.jsx'
import LatestProjects from '../components/latestProjects.jsx'
import JoinUs from '../components/joinUs.jsx'
import OngoingProjects from '../components/ongoing_projects.jsx'
import { CommunityHub } from '../components/comunityHub.jsx'

// const VideoPlayer = dynamic(() => import('../components/videoPlayer/video.jsx'), { ssr: false })


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
      <OngoingProjects />
      {/* <CommunityHub /> */}
      <JoinUs />
    </div>
  )
}
