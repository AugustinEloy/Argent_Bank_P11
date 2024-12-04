import { setUserProfile, updateUserName, login } from './userSlices';

export const loginUser = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      if (data.body && data.body.token) {
        dispatch(login({ token: data.body.token }));
        navigate('/user'); 
      } else {
        alert("Réponse invalide de l'API : pas de token");
      }
    } else {
      alert("Erreur de connexion");
    }
  } catch (error) {
    console.error("Erreur de connexion:", error);
    alert("Erreur de connexion. Veuillez réessayer.");
  }
};
export const fetchUserProfile = (token) => async (dispatch) => {
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
      dispatch(setUserProfile(data.body)); 
    } else {
      console.error("Erreur lors de la récupération du profil.");
    }
  } catch (error) {
    console.error("Erreur de connexion à l'API :", error);
  }
};


export const updateUserProfile = (token, userName) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName }),
    });

    if (response.ok) {
      dispatch(updateUserName({ userName })); 
    } else {
      console.error("Erreur lors de la mise à jour du nom d'utilisateur.");
    }
  } catch (error) {
    console.error("Erreur de connexion à l'API :", error);
  }
};
