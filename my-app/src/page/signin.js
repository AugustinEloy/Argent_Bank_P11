import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/features/userthunk';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password, navigate)); 
  };

  return (
    <main >
      <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
      </div>
    </main>
  );
};

export default SignIn;