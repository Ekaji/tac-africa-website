/* eslint-disable react/jsx-key */
import NavBar from '../layout/nav_bar/NavBar'
export default function Layout({children}) {
  return(
    <main>
      <NavBar />
      {children}
    </main>
  )
}