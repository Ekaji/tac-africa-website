/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */

import React, { useState, forwardRef, Children } from "react";
import { Dropdown, NavDropdown, Nav } from "react-bootstrap";
import { data } from '../pages/api/navLinks.js'
import Link from 'next/link'
import { useRouter } from 'next/router'


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
  const router = useRouter()

  return ( 
    <>
    {
      data.map(({ label, content }, i) => 
        (

          <Dropdown drop={dropDownPosition} >
    
                { content.length > 1 ? 
                  <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    { label }
                  </Dropdown.Toggle> 

                :

                  <Nav.Link as='span' eventKey='1'  >
                    <Link href={`/${content[0].href}`} >
                      <a>
                      {label}                                  
                      </a>
                    </Link>
                  </Nav.Link>
              }
    
                <Dropdown.Menu as={CustomMenu}>
                {
                    content?.map(({href, name}, i) => (
                        <NavDropdown.Item as='div' key={i} href={href} eventKey={i}>
                                <Link href={href} >
                                    <a >
                                    {name}
                                    </a>
                                </Link> 
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