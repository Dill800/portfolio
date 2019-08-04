import React from "react";
import { Link} from "react-scroll";
 
const NavBar = ( props ) => {
    return(
        <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
            <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                    About Me
                </Link>
            </li>
            <li className="nav-item">
            <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                    Experience
                </Link>
            </li>
            <li className="nav-item">
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                    Projects
                </Link>
            </li>
            <li className="nav-item">
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                    Contact
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default NavBar;