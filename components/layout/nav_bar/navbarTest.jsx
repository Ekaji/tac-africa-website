/* eslint-disable react/jsx-key */

import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const NavBarTest = () => {

  const [menuState, setMenuState] = useState(false)
  const handleClick = () => setMenuState(!menuState)

  const [dropdownState, setDropDownState] = useState(false)
  const handleDropdown = () => setDropDownState(!dropdownState)


  return(
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
 <div className="container-fluid">
  <button className={["navbar-toggler", menuState && 'collapsed' ].join(' ')} onClick={ handleClick } type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className={["collapse navbar-collapse", menuState && 'show' ].join(' ')} id="main_nav">
	<ul className="navbar-nav">
    
		<li className={["nav-item dropdown", dropdownState && "show" ].join(' ')} onClick={ handleDropdown }>
			<a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Hover me  </a>
		    <ul className={["dropdown-menu ", dropdownState && "show fade-down" ].join(' ')}>
			  <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
			  <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
			  <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
		    </ul>
		</li>
	</ul>

  </div> 
 </div> 
</nav>
  )
}

export default NavBarTest;