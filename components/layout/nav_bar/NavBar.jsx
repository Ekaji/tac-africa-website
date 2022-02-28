/* eslint-disable react/jsx-key */
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/router'


export default function NavBar(){

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
             <Nav.Link href={'/'} className={router.pathname == "/" ? 'activeLink text-warning' : ""} >Home</Nav.Link>
                <NavDropdown title="About" className={router.pathname == "/about-us" || "/founder" || "/our-team" || '/partners-and-supporters' ? 'activeLink text-warning' : ""} id="nav-dropdown">
                    <NavDropdown.Item href={'/about-us'} eventKey="4.1">About Us</NavDropdown.Item>
                    <NavDropdown.Item href={'/founder'} eventKey="4.2">Founder</NavDropdown.Item>
                    <NavDropdown.Item href={'/our-team'} eventKey="4.2">Our Team</NavDropdown.Item>
                    <NavDropdown.Item href={'/partners-and-supporters'} eventKey="4.3">Partners And Supporters</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Labs" className={router.pathname == "/drone-lab" || "/cyber-lab" ? 'activeLink text-warning' : ""} id="nav-dropdown">
                    <NavDropdown.Item href={'/drone-lab'}  eventKey="4.1">Drone Lab</NavDropdown.Item>
                    <NavDropdown.Item href={'/cyber-lab'} className={router.pathname == "/cyber-lab" ? 'activeLink text-warning' : ""} eventKey="4.2">Cyber Lab</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Resources" className={router.pathname == "/blog" || "/gallery" ? 'activeLink text-warning' : ""} id="nav-dropdown">
                    <NavDropdown.Item className={router.pathname == "/blog" ? 'activeLink text-warning' : ""} eventKey="4.1">Blog</NavDropdown.Item>
                    <NavDropdown.Item className={router.pathname == "/gallery" ? 'activeLink text-warning' : ""} eventKey="4.2">Gallery</NavDropdown.Item>
                </NavDropdown>
             <Nav.Link href={'/contact'}  className={router.pathname == "/contact" ? 'activeLink text-warning' : ""} >Contact</Nav.Link>

            <Nav.Item>
                <Button variant="primary">Donate</Button>{' '}
            </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
</div>

  )
}