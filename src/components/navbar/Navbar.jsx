import { useState } from 'react';
import './navbar.scss';
import '../../app.scss';
import *as Unicons from '@iconscout/react-unicons';
import * as Toggle from './Toggle';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleToggleClick = () => {
      const navMenu = document.getElementById('nav-menu');
      setIsMenuOpen(!isMenuOpen);
  
      if (isMenuOpen) {
        Toggle.removeShowMenuClass(navMenu);
      } else {
        Toggle.addShowMenuClass(navMenu);
      }
    };
    
    return(
        <header className="header" id="header">
        <nav className={`nav_container ${isMenuOpen ? 'menu-open' : ''}`}>
          <a href="#" className="nav_logo">
            SEYER DEVS</a>

                <div className={`nav_menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav_list grid">

                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <Unicons.UilEstate nav_icon/>
                                Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="" className="nav_link">
                                <Unicons.UilUser nav_icon/>
                                About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="" className="nav_link">
                                <Unicons.UilCodeBranch nav_icon/>
                                Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="" className="nav_link">
                                <Unicons.UilConstructor nav_icon/>
                                Services
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="" className="nav_link">
                                <Unicons.UilFileCheck nav_icon/>
                                Portfolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="" className="nav_link">
                                <Unicons.UilFastMail nav_icon/>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <Unicons.UilTimes className="nav_close" id="nav-close" onClick={handleToggleClick} />
                </div>

                <div className="nav-btns">
                    <div className="nav_toggle" id="nav-toggles" onClick={handleToggleClick}>
                        <Unicons.UilBracketsCurly/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;