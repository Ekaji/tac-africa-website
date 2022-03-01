/* eslint-disable react/jsx-key */
import useEffect from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/router'


export default function NavBar(){

    const about = [
        {href: '/about_us', name: 'About Us'},
        {href: '/founder', name: 'Founder'},
        {href: '/our_team', name: 'Our Team'},
        {href: '/partners-and-supporters', name: 'partners and supporters'}
    ];

    const labs = [
        {href: '/drone_and_counter_drone', name: 'Drone And Counter Drone'},
        {href: '/cyber_security_and_cyber_defence', name: 'Cyber Security And Cyber Defence'},
        {href: '/ai_and_robotics_lab', name: 'AI And Robotics Lab'},
        {href: '/blockchain_and_crypto_lab', name: 'Blockchain And Crypto Lab'},
        {href: '/satellite_and_remote_sensing_lab', name: 'Satellite And Remote Sensing Lab'}
    ];

    const resources = [
        {href: '/blog', name: 'Blog' },
        {href: '/gallery', name: 'Gallery'}
    ];

    const handleRouteChange = (router) => {
        
    }

const router = useRouter()
  return(
    <div className="text-primary" >
        <Navbar bg="light" expand="lg">
        <Container fluid >
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className='justify-content-end' style={
                    { 
                        maxHeight: '300px',
                        padding: '20px',
                        fontSize: '1.2em',
                        paddingLeft: '2.2rem',
                        paddingRight: '2.2rem',
                        transition: 'all 0.5s ease 0s',
                        boxShadow: 'none',
                        background: 'transparent none repeat scroll 0% 0%'
                    }
                } 
                id="navbarScroll" >
            <Nav className="my-2 my-lg-0"  navbarScroll >
             <Nav.Link href={'/'} 
                       className={router.pathname == "/" ? 'activeLink text-warning' : ""} >
                           Home
             </Nav.Link>

                <NavDropdown title="About"
                             className={
                                 router.pathname == '/about_us' ? 'activeLink text-warning' : 
                                                    '/founder' ? 'activeLink text-warning' :
                                                    '/our_team' ? 'activeLink text-warning' :
                                                    '/partners_and_supporters' ? 'activeLink text-warning' :
                                                    console.log('checked')
                                 } 
                                 id="nav-dropdown" >
                                    {
                                        about.map(({name, href}, i) => (
                                            <NavDropdown.Item key={i} href={href} className={
                                                router.pathname == href ? 'activeLink text-warning' : "" 
                                                } 
                                                eventKey={i}>{name}
                                            </NavDropdown.Item>
                                            ) 
                                        )
                                    }

                </NavDropdown>
                <NavDropdown title="Labs" 
                             className={
                                 router.pathname == 
                                 "/drone_and_counter_drone" || "/cyber_security_and_cyber_defence" || "/ai_and_robotics_lab" || 
                                 "/blockchain_and_crypto_lab" || "/satellite_and_remote_sensing_lab" 
                                 ? 
                                 'activeLink text-warning' : ""
                                 } 
                                 id="nav-dropdown"> 
                                    {
                                    labs.map(({name, href}, i) => (
                                        <NavDropdown.Item key={i} href={href} className={
                                            router.pathname == href ? 'activeLink text-warning' : "" 
                                            } 
                                            eventKey={i}>{name}
                                        </NavDropdown.Item>
                                        ) 
                                    )
                                }
                </NavDropdown>
                <NavDropdown title="Resources" className={router.pathname == "/blog" || "/gallery" ? 'activeLink text-warning' : ""} 
                             id="nav-dropdown">
                                {
                                    resources.map(({name, href}, i) => (
                                        <NavDropdown.Item key={i} href={href} className={
                                            router.pathname == href ? 'activeLink text-warning' : "" 
                                            } 
                                            eventKey={i}>{name}
                                        </NavDropdown.Item>
                                        ) 
                                    )
                                }

                </NavDropdown>
             <Nav.Link href={'/contact'}  className={router.pathname == "/contact" ? 'activeLink text-warning' : ""} >Contact</Nav.Link>

            <Nav.Item>
                <Button variant="outline-primary">Donate</Button>{' '}
            </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
</div>

  )
}