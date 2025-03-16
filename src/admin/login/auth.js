import axios from 'axios';

const apiAuth = axios.create({
  baseURL: process.env.REACT_APP_API_URL, 
});

export const sendRecoveryEmail = async (email) => {
  try {
    const response = await apiAuth.post('/auth/forgot-password', { email });
    return response.data;
  } catch (error) {
    console.error('Error al enviar el correo de recuperación:', error);
  }
};
