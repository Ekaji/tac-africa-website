/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import LandingPage from '../components/landingPage.jsx'
import Volunteer from '../components/volunteer.jsx'
import OngoingProjects from '../components/ongoing_projects.jsx'
import CardSlider from '../components/cardSlider.jsx'
import LatestNews from '../components/latestNews'
import Map from '../components/map'
import Publications from '../components/publications.jsx'

export default function Home() {
  return (
    <div >
        <Head>
          <title>TAC Africa</title>
          <meta name="description" content="TAC Africa Website" />
          <link rel="icon" href="/TAC_LOGO.png" />
        </Head>
        <LandingPage />
        <LatestNews text2={'News'} />
        <CardSlider  text2='Labs' text3={""} />
        <OngoingProjects />
        <Publications />
        <Map />
        <Volunteer />
    </div>
  )
}
