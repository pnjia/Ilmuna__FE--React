import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
export const Navbar = ({handleButtonLogin}) => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__brand">
          <h1>Ilmuna</h1>
        </div>
        <div className="navbar__hamburger__menu">
            <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className="navbar__menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Courses</a>
          </li>
          <li>
            <a onClick={handleButtonLogin}>Masuk</a>
          </li>
          <li>
            <a href="/">Daftar</a>
          </li>
        </ul>
      </div>
    </>
  );
};
