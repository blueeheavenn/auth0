import { useLocation } from 'react-router-dom';
import { logout } from './AuthService';

const Profile = () => {
  const { state } = useLocation();
  const profile = state?.profile;

  return (
    <div className="profile">
      {profile && (
        <>
          <h1>Welcome, {profile.nickname || profile.name || profile.email}</h1>
          {profile.email && <p>Email: {profile.email}</p>}
          {profile.nickname && <p>Username: {profile.nickname}</p>}
          <button onClick={logout}>Log Out</button>
        </>
      )}
    </div>
  );
};

export default Profile