import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/features/userSlices'; 
import logo from "../assets/argentBankLogo.png";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faCircleUser, faGear } from '@fortawesome/free-solid-svg-icons';


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
                {userName}
                <FontAwesomeIcon 
                icon={faCircleUser}
                style={{ color: '#00bc77',  fontSize: '2rem', marginLeft: '1rem' , }}
                />
              </span>
                <button
                  className="main-nav-item"
                  style={{ cursor: "pointer", border: "none", background: "none", color: "#00bc77", marginLeft: '3rem', fontSize: '2rem'  }}
                >
                  <FontAwesomeIcon icon={faGear} />
                </button>

                  <button
                    className="main-nav-item"
                    onClick={handleLogout}
                    style={{ cursor: "pointer", border: "none", background: "none", color: "#00bc77", marginLeft: '3rem', fontSize: '2rem'  }}
                  >
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
