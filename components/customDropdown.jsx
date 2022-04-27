/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */

import React, { useState, forwardRef, Children } from "react";
import { Dropdown, NavDropdown, Nav } from "react-bootstrap";
import { data } from '../pages/api/navLinks.js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/component.styles/customDropdown.module.scss'


// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = forwardRef(
  (props, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
     &#x2BC8; {props.children}
    </a>
  )
);


// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = forwardRef(
  (props, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={props.style}
        className={props.className}
        aria-labelledby={props.labeledBy}
      >
        <ul className="list-unstyled">
          { Children.toArray(props.children) }
        </ul>
      </div>
    );
  }
);

export default function CustomDropdown({ dropDownPosition }) {
  // const router = useRouter()

  return ( 
    <>
    {
      data.map(({ label, content }, i) => 
        (

          <Dropdown drop={dropDownPosition} >
    
                { 
                content.length > 1 ? 
                  <Dropdown.Toggle key={label} as={CustomToggle} id="dropdown-custom-components" >
                    <span style={{ textTransform: 'capitalize'}} >{ label }</span> 
                  </Dropdown.Toggle> 

                :

                  <Nav.Link key={label} as='span' eventKey='1' style={{ padding: '0px 0px 0px 20px !important' }}  >
                    <Link href={`/${content[0].href}`} >
                      <a>
                      <span style={{ textTransform: 'capitalize'}} >{ label }</span> 
                      </a>
                    </Link>
                  </Nav.Link>
              }
    
                <Dropdown.Menu as={CustomMenu}>
                {
                    content?.map(({href, name}, i) => (
                        <NavDropdown.Item key={name} as='div' href={href} eventKey={i}>
                                <Link href={href} >
                                    <a >
                                    {name}
                                    </a>
                                </Link> 
                          <Dropdown.Divider  className={i === content.length -1 && styles.dropdown_divider} />
                        </NavDropdown.Item>
                        ) 
                    )
                }
                </Dropdown.Menu>
              </Dropdown>
          )

       )
    }
    </>
   
  );
};