import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../assets/images/logo.png";
import NavItem,{ NavItemDropdown } from '../../Components/NavItem/NavItem';

const Header=()=>
{
    return (
        <>
     <div className="navbar navbar-expand-md navbar-dark ">
        <div className="container">
            <Link to="/" className="navbar-brand"> 
            <img src={logo}></img>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
                    <NavItem ><a href="#features" className="nav-link">Browse</a></NavItem>
                    <NavItemDropdown>
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Detais</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">Fortnites</a></li>
                            <li><a href="#next" className="dropdown-item">Call of duty</a></li>
                        </ul>
                    </NavItemDropdown>
                    <NavItem className="nav-item"><a href="#faq" className="nav-link">Streams</a></NavItem>
                    <NavItem className="nav-item"><Link to="/profile" className="nav-link">profile</Link></NavItem>
                </ul>
            </div>
        </div>
    </div>
        </> 
    )
      
    
}
export default Header;