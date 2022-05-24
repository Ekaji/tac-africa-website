/* eslint-disable react/jsx-key */
import Head from 'next/head'
import LandingPage from '../components/landingPage.jsx'
import OurLabs from '../components/ourLabs.jsx'
import JoinUs from '../components/joinUs.jsx'
import OngoingProjects from '../components/ongoing_projects.jsx'


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
      <JoinUs />
    </div>
  )
}
