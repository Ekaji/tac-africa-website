/* eslint-disable react/jsx-key */
import NavBar from '../layout/nav_bar/NavBar'
// import NavBarTest from '../layout/nav_bar/navbarTest'
import Footer from '../layout/footer/Footer'
export default function Layout({children}) {
  return(
    <>
      <NavBar />
        <div style={{minHeight: '90vh'}} >
          {children}
        </div>
      <Footer />
    </>
  )
}