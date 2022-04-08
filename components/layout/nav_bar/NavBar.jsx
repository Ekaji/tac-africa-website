/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import { Badge, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import styles from '../../../styles/layout/navbar.module.scss'
import Button_ from '../../button.jsx'
import { useRouter } from 'next/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Link from 'next/link'
import Image from 'next/image'

export default function NavBar(){


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
        {href: '/policing_the_cyberspace', name: 'Policing the Cyberspace' },
        {href: '/innovation_in_policing', name: 'Innovation in Policing' },
        {href: '/drone_alliance_africa', name: 'Drone Alliance Africa' },
        {href: '/artificial_intelligence', name: 'Artificial Intelligence' },
        {href: '/afri_agri_tech_project', name: 'AfriAgriTech project' },
        {href: '/crawler', name: 'Crawler' },
        {href: '/volunteer_management', name: 'Volunteer Management' },
        {href: '/cyberPeace_dialogue_2020', name: 'CyberPeace Dialogue 2020' },
        {href: '/research_on_cyber_security', name: 'Research on Cyber Security' }
       
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


const router = useRouter()
  return(
    <div className={styles.nav_container}  >
        <Navbar collapseOnSelect className={styles.nav_inner__container} style={{padding: '0px', marginTop: '-14px' }} expand="lg">
            
        <Container fluid  >
            <Navbar.Brand >
                <Link href={'/'} >
                  <a>
                    <Image width='100' height='100' src='/TAC_LOGO.webp' alt='logo' style={{maxWidth: '100px', marginLeft: '19px'}} />
                  </a>
                </Link> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' className={['justify-content-end' , styles.navbar_collapse].join(' ')} >
            <Nav className={['my-2 my-lg-0', styles.navbar_collapse__nav]} style={{paddingTop: '20px'}} >
                <Nav.Link as='span' eventKey='1' className={ styles.nav_link } >
                    <Link href={'/'}>
                        <a className={ router.pathname == '/' ? 'text-primary' : styles.nav_text }  >
                        Home                                   
                        </a>
                    </Link>
                </Nav.Link>

                <NavDropdown  title={<span className={getHref(labs, currentPath ) ? 'text-primary' : styles.nav_text }>Labs</span> }
                             className={  styles.nav_link }
                                 id="nav-dropdown"> 
                                    {
                                    labs.map(({name, href}, i) => (
                                        <NavDropdown.Item as='div' key={i} href={href} className={
                                            router.pathname == href ? ' text-warning' : styles.nav_text
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

                <NavDropdown title={<span className={getHref(about, currentPath ) ? 'text-primary' : styles.nav_text }>About</span> }
                             className={  styles.nav_link }
                                 id="nav-dropdown"> 
                                    {
                                    about.map(({name, href}, i) => (
                                        <NavDropdown.Item as='div' key={i} href={href} className={
                                            router.pathname == href ? ' text-warning' : styles.nav_text
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
                <NavDropdown title={<span className={getHref(projects, currentPath ) ? 'text-primary' : styles.nav_text }>Projects</span> }
                             className={  styles.nav_link }
                             id="nav-dropdown">
                                {
                                    projects.map(({name, href}, i) => (
                                        <NavDropdown.Item as='div' key={i} href={href} className={
                                            router.pathname == href ? ' text-warning' : styles.nav_text
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
                            <a className={ router.pathname == '/contact' ? 'activeLink text-warning' : styles.nav_text}>                                  
                                Contact
                            </a>
                        </Link>
                    </Nav.Link>
            
            <Nav.Item className={  styles.nav_link }>
                <Button_ title={' Blog '} pill variant={'primary'}   />
            </Nav.Item>

            <Nav.Item className={  styles.nav_link }>
                <Button_ title={' Donate '} pill variant={'outline-primary'}  />
            </Nav.Item>

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>

  )
}