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
    dispatch(loginUser(email, password, navigate)); // Call the thunk
  };
  /*const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          email, 
          password, 
        }),
      });

      
      const data = await response.json();
      console.log("Réponse de l'API:", data); 
  
      if (response.ok) {
        if (data.body && data.body.token) {
         
          dispatch(login({
            token: data.body.token, 
          }));
          navigate('/user'); 
        } else {
          alert('Réponse invalide de l\'API : pas de token');
        }
      } else {
        alert('Erreur de connexion');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      alert('Erreur de connexion. Veuillez réessayer.');
    }
  };*/

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
