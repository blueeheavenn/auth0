import { useEffect } from 'react';
import { handleAuthCallback, getUserProfile } from './AuthService';
import { useNavigate,  } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    handleAuthCallback()
      .then(async (result:any) => {
        const profile = await getUserProfile(result.accessToken);
        navigate('/profile', { state: { profile } });
      })
      .catch(err => {
        navigate('/login', { state: { error: err.message } });
      });
  }, [navigate]);

  return <div>Loading...</div>;
};