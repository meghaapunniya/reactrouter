import react from 'react';
import "../Navbar/Navbar.css";
import { MenuList} from './MenuList';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    
    const menuList = MenuList.map(({url,title},index) => {
        return(
            <li key={index}>
                <NavLink exact to={url} activeclassname="active">
                    {title}
                </NavLink>
            </li>
        );
    });
    
    
    return(
    <nav>
        <div className="logo">
            MarineMammals<font>World</font> 
        </div>
        <div className="menu-icon">
           <i className="fa fa-bars"></i> 
        </div>
        <ul className="menu-list">{menuList}</ul>
    </nav>
  );    
};

export default Navbar;
