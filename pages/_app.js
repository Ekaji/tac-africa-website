/* eslint-disable react/jsx-key */
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import '../styles/component.styles/contact.scss'
import Layout from '../components/layout/Layout'
import '../styles/layout/navBarTest.css'


function MyApp({ Component, pageProps }) {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
export default MyApp
