import { useState } from "react";
import { useAuthContext } from './useAuthContext';

export const useRegister = () => {

  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const register = async (firstName, lastName, email, password) => {
    setError(null);
    setIsLoading(true);

    const response = await fetch('http://localhost:4000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({firstName, lastName, email, password})
    })
    const json = await response.json();


    if(response.ok) {
      localStorage.setItem('user', JSON.stringify(json));
      dispatch({
        type: 'LOGIN',
        payload: json
      })
      setError(null);
      setIsLoading(false)
    }

    if(!response.ok) {
      setError(json.error)
      setIsLoading(false)
    }
  };

  return { register, error, isLoading }
};