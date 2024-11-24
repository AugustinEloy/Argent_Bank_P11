import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../store/features/userthunk';

const User = () => {
/* const token = useSelector((state) =>state.user.token);
console.log(token)
const [profile, setProfile] = useState(null) 
const navigate = useNavigate() 
const [userName, setNewUserName] =useState('')
const dispatch = useDispatch() 
  const token = useSelector((state) => state.user.token); 
  console.log(token)
  const userName = useSelector((state) => state.user.userName); 
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState("");
   useEffect(() => {
    if (!token) {
      navigate("/signin"); 
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfile(data.body); 
          console.log("Réponse de l'API : ", data); 
        } else {
          console.error("Erreur lors de la récupération du profil");
        }
      } catch (error) {
        console.error("Erreur de connexion à l'API", error);
      }
    };

    fetchProfile(); 
  }, [token, navigate]); 
  const handleChangeUserName = async () => {
    if (!newUserName.trim()) {
      console.error("Le nom d'utilisateur ne peut pas être vide.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: newUserName }),
      });

      if (response.ok) {
        dispatch(updateUserName({ userName: newUserName })); 
        console.error('un probleme est arrive');
      } else {
        const data = await response.json();
        console.error("Erreur lors de la mise à jour du nom.");
      }
    } catch (error) {
      console.error("Erreur de connexion à l'API :", error);
      console.error("Erreur de connexion. Veuillez réessayer.");
    }
  }; */
  const dispatch = useDispatch();

  
  const token = useSelector((state) => state.user.token);
  const userName = useSelector((state) => state.user.userName);
  console.log(token)

  const [newUserName, setNewUserName] = useState('');

  
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [token, dispatch]);

 
  const handleUpdateUserName = () => {
    if (newUserName.trim()) {
      dispatch(updateUserProfile(token, newUserName));
      setNewUserName('');
    } else {
      console.error("Le nouveau nom d'utilisateur est vide");
    }
  };
  return (
    <div>
      <div className="main_account">
        <div className="header">
          <h1>Welcome back<br />{userName}</h1>
          <div>
            <input
              type="text"
              placeholder="Enter new username"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <button onClick={handleUpdateUserName}>Update Username</button>
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
            <button className="transaction-button">View transactions</button>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>

        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default User;