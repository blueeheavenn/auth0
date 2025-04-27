// src/components/Profile.tsx
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isLoading, logout } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="profile">
      {user && (
        <>
          <h1>Welcome, {user.nickname || user.name || user.email}</h1>
          {user.email && <p>Email: {user.email}</p>}
          {user.nickname && <p>Username: {user.nickname}</p>}
          <button onClick={() => logout({ 
            logoutParams: { returnTo: window.location.origin } 
          })}>
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;