import { useAuth0 } from '@auth0/auth0-react';
import { User } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>Welcome {User.name}</h2>
        <img src={user?.picture} alt={user?.address} />
      </div>
    )
  );
};

export default Profile;