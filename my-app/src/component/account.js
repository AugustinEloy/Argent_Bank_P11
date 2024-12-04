import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Account = ({ title, amount, description, accountNumber }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title} ({accountNumber})</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">
          <FontAwesomeIcon 
          icon={faAngleRight} 
          style={{ fontSize: '4rem' }} 
          />
        </button>
      </div>
    </section>
  );
};

export default Account;
