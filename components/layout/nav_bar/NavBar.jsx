/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import styles from '../../../styles/layout/navbar.module.scss'
import Button_ from '../../button.jsx'
import { useRouter } from 'next/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Link from 'next/link'

export default function NavBar(){

    const [animateNavBar, setAnimateNavBar] = useState({backgroundColor: 'transparent', height: '20vh' })

    useScrollPosition(({ currPos }) => {
        if (currPos.y < -47) {
            setAnimateNavBar( {backgroundColor: 'white', height: '15vh' })
        } else {
            setAnimateNavBar({backgroundColor: 'transparent', height: '20vh'})
        }
    } ) 
    

    const about = [
        {href: '/about_us', name: 'About Us'},
        {href: '/founder', name: 'Founder'},
        {href: '/our_team', name: 'Our Team'},
        {href: '/partners_and_supporters', name: 'partners and supporters'},
        {href: '/gallery', name: 'Gallery'}
    ];

    const labs = [
        {href: '/drone_and_counter_drone', name: 'Drone And Counter Drone'},
        {href: '/cyber_security_and_cyber_defence', name: 'Cyber Security And Cyber Defence'},
        {href: '/ai_and_robotics_lab', name: 'AI And Robotics Lab'},
        {href: '/blockchain_and_crypto_lab', name: 'Blockchain And Crypto Lab'},
        {href: '/satellite_and_remote_sensing_lab', name: 'Satellite And Remote Sensing Lab'}
    ];

    const projects = [
        {href: '/Policing_the_Cyberspace', name: 'Policing the Cyberspace' },
        {href: '/Innovation_in_Policing', name: 'Innovation in Policing' },
        {href: '/Drone_Alliance_Africa', name: 'Drone Alliance Africa' },
        {href: '/Artificial_Intelligence', name: 'Artificial Intelligence' },
        {href: '/AfriAgriTech_Project', name: 'AfriAgriTech project' },
        {href: '/Crawler', name: 'Crawler' },
        {href: '/Volunteer_Management', name: 'Volunteer Management' },
        {href: '/CyberPeace_Dialogue_2020', name: 'CyberPeace Dialogue 2020' },
        {href: '/Research_on_Cyber_Security', name: 'Research on Cyber Security' }
       
    ];

    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(() => router.asPath)
    })


    const getHref = (hrefArray, pathName) => {
        const hrefs = hrefArray.map(href =>  href.href)
            if (hrefs.includes(pathName)) {
                return true
            } else {
                return false
            }
    }

    const [open, setOpen] = useState(false)

 

const router = useRouter()
  return(
    <div className={styles.nav_container}  >
        <Navbar collapseOnSelect className={styles.nav_inner__container} style={{padding: '0px', marginTop: '-14px' }} expand="lg">
        <Container fluid  >
            <Navbar.Brand >
                <Link href={'/'} >
                  <a>
                    <img src='/TAC_LOGO.webp' alt='logo' style={{maxWidth: '100px', marginLeft: '19px'}} />
                  </a>
                </Link> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' className={[' justify-content-end ', styles.navbar_collapse].join(' ')} >
            <Nav className={['my-2 my-lg-0', styles.navbar_collapse__nav]} style={{paddingTop: '20px'}} >
                <Nav.Link eventKey='1' className={ styles.nav_link } >
                    <Link href={'/'}>
                        <a className={ router.pathname == '/' ? 'text-warning' : "text-primary"}  >
                        Home                                   
                        </a>
                    </Link>
                </Nav.Link>

                <NavDropdown title={<span className={getHref(about, currentPath ) ? 'text-warning' : 'text-primary' }>About</span> }
                             className={  styles.nav_link }
                                 id="nav-dropdown"> 
                                    {
                                    about.map(({name, href}, i) => (
                                        <NavDropdown.Item as='div' key={i} href={href} className={
                                            router.pathname == href ? ' text-warning' : "text-primary" 
                                            } 
                                            eventKey={i}>
                                                <Link href={href} >
                                                  <a >
                                                    {name}
                                                  </a>
                                                </Link> 
                                        </NavDropdown.Item>
                                        ) 
                                    )
                                }
                </NavDropdown>
                <NavDropdown title={<span className={getHref(labs, currentPath ) ? 'text-warning' : 'text-primary' }>Labs</span> }
                             className={  styles.nav_link }
                                 id="nav-dropdown"> 
                                    {
                                    labs.map(({name, href}, i) => (
                                        <NavDropdown.Item as='div' key={i} href={href} className={
                                            router.pathname == href ? ' text-warning' : "text-primary" 
                                            } 
                                            eventKey={i}>
                                                <Link href={href} >
                                                  <a >
                                                    {name}
                                                  </a>
                                                </Link> 
                                        </NavDropdown.Item>
                                        ) 
                                    )
                                }
                </NavDropdown>
                <NavDropdown title={<span className={getHref(projects, currentPath ) ? 'text-warning' : 'text-primary' }>Projects</span> }
                             className={  styles.nav_link }
                             id="nav-dropdown">
                                {
                                    projects.map(({name, href}, i) => (
                                        <NavDropdown.Item as='div' key={i} href={href} className={
                                            router.pathname == href ? ' text-warning' : "text-primary" 
                                            } 
                                            eventKey={i}>
                                                <Link href={href} >
                                                  <a>                                  
                                                    {name}
                                                  </a>
                                                </Link> 
                                        </NavDropdown.Item>
                                        ) 
                                    )
                                }

                </NavDropdown>
            
                    <Nav.Link as='div' className={  styles.nav_link } >
                        <Link href={'/contact'}>
                            <a className={ router.pathname == '/contact' ? 'activeLink text-warning' : "text-primary" }>                                  
                                Contact
                            </a>
                        </Link>
                    </Nav.Link>
            
            <Nav.Item className={  styles.nav_link }>
                <Button_ title={' Blog '} variant={'primary'}   />
            </Nav.Item>

            <Nav.Item className={  styles.nav_link }>
                <Button_ title={'Donate'} variant={'outline-primary'}   />
            </Nav.Item>

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>

  )
}