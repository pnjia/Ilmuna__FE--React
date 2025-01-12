import "./Navbar.css";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { ShowLogin } from "../ShowLogin/ShowLogin";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ isOnPageLogin }) => {
  const [isOpen, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (showLogin || showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLogin, showModal]);

  const handleButtonLogin = () => {
    if (isOnPageLogin) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  };

  const handleButtonModal = () => {
    setShowModal(!showModal);
  };

  const handleXButtonLogin = (e) => {
    e.preventDefault();
    setShowLogin(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__brand">
          <h1>Ilmuna</h1>
        </div>
        <div
          className="navbar__hamburger__menu"
          onClick={() => handleButtonModal()}
        >
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
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
            <a href="/register">Daftar</a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="navbar__menu__mobile" >
          <div className="logreg">
            <button><a href="/login">Masuk</a></button>
            <button><a href="/register">Daftar</a></button>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>Courses</li>
            </ul>
          </div>
        </div>
      )}
      <ShowLogin handleXButton={handleXButtonLogin} showLogin={showLogin} />
    </>
  );
};
