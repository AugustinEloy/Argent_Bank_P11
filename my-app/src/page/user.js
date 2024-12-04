import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../store/features/userthunk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight }  from '@fortawesome/free-solid-svg-icons';


const User = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const userName = useSelector((state) => state.user.userName);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  console.log(token)

  const [newUserName, setNewUserName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [token, dispatch]);

 
  const handleUpdateUserName = () => {
    if (newUserName.trim()) {
      dispatch(updateUserProfile(token, newUserName));
      setNewUserName('');
      setIsEditing(false);
    } else {
      console.error("Le nouveau nom d'utilisateur est vide");
    }
  };
  return (
    <div>
      <div className="main_account">
        <div className="header">
        {isEditing ? (
          <div className="form-group">
          <h2>Edit user info</h2>
          <div className="input-group">
            <label htmlFor="editUserName">User name:</label>
            <input
              type="text"
              placeholder="Enter new username"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className="input-user"
            />
          </div>
          <div className="input-group">
            <label>First name:</label>
            <input type="text" value={firstName} readOnly className="input-user" />
          </div>
          <div className="input-group">
            <label>Last name:</label>
            <input type="text" value={lastName} readOnly className="input-user" />
          </div>
          <div className="button-group">
            <button className="button-user" onClick={handleUpdateUserName}>
              Save
            </button>
            <button className="button-user" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
          ) : (
            <div>
              <h1>
                Welcome back<br />{userName}
              </h1>
              <button className='edit-button' onClick={() => setIsEditing(true)}>Edit Name</button>
            </div>
          )}
          <div>
          </div>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">
            <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default User;