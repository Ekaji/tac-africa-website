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
import { data } from '../../../pages/api/navLinks.js'


export default function NavBar(){

    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(() => router.asPath)
    })


    const getHref = (hrefArray, pathName) => {
        const hrefs = hrefArray?.map(href =>  href.href)
            if (hrefs?.includes(pathName)) {
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

                {data?.map(({label, content}) => (
                        <NavDropdown title={<span className={getHref(content, currentPath ) ? 'text-primary' : styles.nav_text }>{ label }</span> }
                        className={  styles.nav_link }
                            id="nav-dropdown"> 
                            {
                            content?.map(({href, name}, i) => (
                                <NavDropdown.Item as='div' key={i} href={href} className={
                                    router.pathname == content.href ? ' text-warning' : styles.nav_text
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
                ))}
            
            <Nav.Link as='div' className={  styles.nav_link } >
                <Link href={'/contact'}>
                    <a className={ router.pathname == '/contact' ? 'activeLink text-warning' : styles.nav_text}>                                  
                        Contact
                    </a>
                </Link>
            </Nav.Link>
            
            <Nav.Item className={  styles.nav_link__button }>
                <Button_ title={' Blog '} pill variant={'primary'}   />
            </Nav.Item>

            <Nav.Item className={  styles.nav_link__button }>
                <Button_ title={' Donate '} pill variant={'outline-primary'}  />
            </Nav.Item> 

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>

  )
}