/* eslint-disable react/jsx-key */
import '../styles/layout/hamburger.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import '../styles/component.styles/contact.scss'
import '../styles/layout/navbarHover.css'
import Layout from '../components/layout/Layout'
import dynamic from 'next/dynamic'
const flowbite = dynamic(() => import('flowbite'), { ssr: false })


function MyApp({ Component, pageProps }) {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
export default MyApp
