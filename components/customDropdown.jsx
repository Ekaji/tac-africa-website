/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */

import React, { useState, forwardRef, Children } from "react";
import { Dropdown, NavDropdown, Nav } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import { data } from '../pages/api/navLinks.js'
import Link from 'next/link'
import { useRouter } from 'next/router'



const fruits = [
  { id: 1, fruit: "Apples", prefix: "How's about them " },
  { id: 2, fruit: "Pear", prefix: "A cracking ", suffix: "!" },
  { id: 3, fruit: "Oranges", prefix: "What rhymes with ", suffix: "?" },
  { id: 4, fruit: "Banana", prefix: "Fruit flies like a " },
  { id: 5, fruit: "Coconuts", prefix: "Oh what a lovely bunch of " },
  { id: 6, fruit: "Avocado", prefix: "Is an ", suffix: " even a fruit?" }
];


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
      {/* <span style={{ paddingLeft: "5px" }}>&#x25bc;</span> */}
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
          { Children.toArray(props.children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

export default function CustomDropdown({ dropDownPosition }) {
  const router = useRouter()

  return ( 
    <>
            <Nav.Link as='span' eventKey='1'  >
                <Link href={'/'}>
                    <a>
                    Home                                   
                    </a>
                </Link>
            </Nav.Link>
    {
      data.map(({ label, content }, i) => (
      <Dropdown drop={dropDownPosition} >


            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              { label }
            </Dropdown.Toggle>

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
      ))
    }
          {
          ['contact', 'blog', 'donate'].map(items => (
            <Nav.Link as='div' >
              <Link href={`/${items}`}>
                  <a >                                  
                      {items}
                  </a>
              </Link>
          </Nav.Link>
          ))
}
    </>
   
  );
};