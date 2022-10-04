/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import LandingPage from '../components/landingPage.jsx'
import Volunteer from '../components/volunteer.jsx'
import OngoingProjects from '../components/ongoing_projects.jsx'
import CardSlider from '../components/cardSlider.jsx'
import VideoIntro from '../components/videoIntro.jsx'
import LatestNews from '../components/latestNews'
import Map from '../components/map'

export default function Home() {
  const [showModal, setShowModal] = useState(true)
  return (
    <div >
        <Head>
          <title>TAC Africa</title>
          <meta name="description" content="TAC Africa Website" />
          <link rel="icon" href="/TAC_LOGO.png" />
        </Head>
        <LandingPage />
        {/* <VideoIntro /> */}
        <LatestNews text2={'News'} />
        <CardSlider  text2='Labs' text3={""} />
        <OngoingProjects />
        <Map />
        <Volunteer />
    </div>
  )
}
