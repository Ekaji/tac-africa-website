/* eslint-disable react/jsx-key */
import NavBar from '../layout/nav_bar/NavBar'
import Footer from '../layout/footer/Footer'
import { useState } from 'react'
import { ModalContext } from '../../context/modalContext.js'
import Nav_Bar from './nav_bar/newNavBar'

export default function Layout({children}) {

  const [modalState, setModalState] = useState(false)

  return(
    <ModalContext.Provider value={[modalState, setModalState]} >
      <Nav_Bar />
        <div style={{minHeight: '90vh'}} >
          {children}
        </div>
      <Footer />
    </ModalContext.Provider>
  )
}