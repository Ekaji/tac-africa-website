/* eslint-disable react/jsx-key */
// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable react/jsx-key */
import { useEffect, useState, useCallback } from 'react'
import { Badge, Dropdown, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import styles from '../../../styles/layout/navbar.module.scss'
import Button_ from '../../button.jsx'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { data } from '../../../pages/api/navLinks.js'
import DonateButton from '../../../components/donateButton'


export default function NavBar(){

    // used for setting the styles of navbar labels with active links
    const [currentPath, setCurrentPath] = useState('')
    const router = useRouter()

    useEffect(() => {
        setCurrentPath(() => router.asPath)
    }, [router])


    const getHref = (hrefArray, pathName) => {
        const hrefs = hrefArray?.map(href =>  href.href)
            if (hrefs?.includes(pathName)) {
                return true
            } else {
                return false
            }
    }

    const [dropdownTarget, setDropDownTarget] = useState(null)
    const handleDropdown = (e, label) => {
        if (dropdownTarget !== null) {
            setDropDownTarget(null)
        }
        e.preventDefault()
        setDropDownTarget(label)
    }


    const [menuState, setMenuState] = useState(false)
    
        const toggleButton = useCallback(
          () => {
              setMenuState(menuState => !menuState)
          },
          [],
        )
    
  
  return(
    <div className={ 
        // styles.nav_container
        '-mt-8 top-0 w-full z-40'
        }  >
        <Navbar collapseOnSelect className='p-0'  expand="lg">
            
        <Container fluid  className={
            // styles.background_blur 
            'bg-white m-0 p-0'
            }  >
            <Navbar.Brand >
                <Link href={'/'} >
                  <a>
                    <img src='/TAC_LOGO.webp' alt='logo' className='ml-4 mt-6 w-16'/>
                  </a>
                </Link>
            </Navbar.Brand>

            <span className='visible md:hidden' style={{zIndex: '100'}}
            onClick={ toggleButton } 
            >
                <Navbar.Toggle 
                    aria-controls='responsive-navbar-nav'
                    className='top-0 left-0 absolute z-10 w-full h-full opacity-0'
                    />
                    <button className={['hamburger hamburger--collapse mt-10 ml-5', menuState && 'is-active'].join(' ')} onClick={ toggleButton } type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
            </span>

            <Navbar.Collapse id='responsive-navbar-nav' className={['justify-end -mb-10 text-base shadow-none mr-0'].join(' ')} >
                
            <Nav className={['my-2 my-lg-0 font-semibold'].join(' ')}  >
                

            {data?.map(({label, content, type, details}, i) => (
                    <>
                        { content.length > 1 ?  ( //displays dropdown menu items

                        <ul className={["navbar-nav ml-8" ].join(' ') }>
                            
                            
                            <li className={["nav-item dropdown" ].join(' ')}  >
                                    <input id="menu" className={ styles.menu__toggle} type="checkbox" />
                                    
                                    <label htmlFor="menu" className={styles.menu__toggle__text} >

                                    <a className="nav-link dropdown-toggle" href="#" tabIndex="0" data-bs-toggle="dropdown" 
                                     >

                                        <span eventKey={i} className={getHref(content, currentPath ) ? [
                                        'text-primary', 
                                        // styles.nav_label_text 
                                        'uppercase font-semibold'
                                        ].join(' ') : 
                                        // styles.nav_label_text 
                                        'uppercase font-semibold'
                                        } >
                                                    { label }
                                            </span> 
                                    </a>
                                    </label>
                                    {/* <input id="menu" className={ styles.menu__toggle } type="checkbox" /> */}


                                <ul className={["dropdown-menu ", dropdownTarget == label && 'dropdown-menu-right fade-down show', styles.menu__body ].join(' ')}>
                         {
                            content?.map(({href, name}, i) => ( //displays dropdown menu items

                                <Nav.Link key={i} as='li'  href={href} onClick={() => setDropDownTarget(null)} className={
                                    router.pathname == content.href ? [ styles.nav_dropdown_link_text].join(' ') : styles.nav_text
                                    } >
                                    <Link href={href} >
                                        <a className="dropdown-item" onClick={ toggleButton } >
                                        {name}
                                        </a>
                                    </Link> 
                                    <Dropdown.Divider  className={[ i !== content.length -1 ? styles.dropdown_divider : styles.dropdown_divider_last].join(' ')} />
                                </Nav.Link>
                                ) 
                            )
                        }
                                </ul>
                            </li>
                        </ul>
                        ) :
                        label == 'blog' ? ( //displays button
                            <Nav.Item key={i} className={ styles.nav_link__button_blog } onClick={ toggleButton }  >
                                <div  className={ styles.nav_link_a } >
                                    <Link href='/blog'>
                                        <a>
                                          <Button_ title={ label } pill variant={details.variant}  />
                                        </a>
                                    </Link>
                                </div>
                            </Nav.Item>  
                        )
                        : 
                        label == 'donate' ? (
                            <Nav.Item key={i} className={ [styles.nav_link__button ] }  >
                                <div  className={ [ styles.nav_link_a, styles.nav_link__button_donate ].join(' ')} >
                                    <DonateButton wide title={ label } pill variant={details.variant} />
                                </div>
                            </Nav.Item>  
                        )
                        :
                        
                        ( // displays navlink without dropdown
                            <Nav.Link key={i} as='span' eventKey='1' className={[ styles.nav_link ].join(' ')} onClick={ toggleButton } >
                                <Link href={`/${content[0].href}`}>
                                    <a className={ [ styles.nav_link_a, router.pathname == `/${content[0].href}` ? 'text-primary' : styles.nav_text_label].join(' ')} >
                                    { label }                                   
                                    </a>
                                </Link>
                            </Nav.Link>
                        )
                        
                    } 
                    </>
                ))}

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>

  )
}
