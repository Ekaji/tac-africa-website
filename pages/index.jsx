/* eslint-disable react/jsx-key */
import Head from 'next/head'
import LandingPage from '../components/landingPage.jsx'
// import Welcome from '../components/welcome.jsx'
import OurLabs from '../components/ourLabs.jsx'
// import Drive from '../components/drive.jsx'
import LatestProjects from '../components/latestProjects.jsx'
import JoinUs from '../components/joinUs.jsx'


export default function Home() {
  return (
    <div >
      <Head>
        <title>TAC Africa</title>
        <meta name="description" content="TAC Africa Website" />
        <link rel="icon" href="/TAC_LOGO.png" />
      </Head>
      <LandingPage />
      {/* <Welcome /> */}
      <OurLabs />
      {/* <Drive /> */}
      {/* <LatestProjects /> */}
      <JoinUs />
    </div>
  )
}
