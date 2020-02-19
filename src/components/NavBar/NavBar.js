import React from 'react';
import {Link} from 'react-scroll'
import './NavBar.css'

const NavBar = (props) => {
    return ( 
        <nav className='navbar'>

            <div className='nav-content'>
                <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="nav-element"
                >
                About Me
                </Link>

                
                <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-element"
                >
                Experience
                </Link>


                <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-element"
                >
                Projects
                </Link>

            </div>

        </nav>
     );
}
 
export default NavBar;