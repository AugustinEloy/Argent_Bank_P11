import { setUserProfile, updateUserName } from './userSlices';


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
