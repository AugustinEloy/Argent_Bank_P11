import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/features/userSlices'; 
import logo from "../assets/argentBankLogo.png";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faImagePortrait } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userName = useSelector((state) => state.user.userName);

  const handleLogout = () => {
    dispatch(logout());
    navigate ('/')
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <span className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              <FontAwesomeIcon icon={faImagePortrait} />
              {userName}
            </span>
            <button
              className="main-nav-item"
              onClick={handleLogout}
              style={{ cursor: "pointer", border: "none", background: "none", color: "#2c3e50" }}
            >
              <i className="fa fa-sign-out"></i>
              <FontAwesomeIcon icon={faPowerOff} />
            </button>
          </>
        ) : (
          <Link className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
