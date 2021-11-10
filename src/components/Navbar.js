import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import './Navbar.css';

const Navbar = () => (
  <div className="NavBar">
    <div className="Logo">
      <img className="Logo-Img" src={logo} alt="planet logo" />
      <span className="Logo-Text">Space Travelers&apos; Hub</span>
    </div>
    <div className="Navigation-Links">
      <ul className="Link-List">
        <li className="Link-Item">
          <NavLink to="/rockets">
            Rockets
          </NavLink>
        </li>
        <li className="Link-Item">
          <NavLink to="/my-profile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
