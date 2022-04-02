/* eslint-disable react/jsx-key */
// import 'flowbite';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import '../styles/component.styles/contact.css'
import Layout from '../components/layout/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
  }
export default MyApp
