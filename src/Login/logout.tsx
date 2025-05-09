import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
          <button onClick={() => logout({ logoutParams: { returnTo: "/login"}})}>
        Log Out
      </button>
    )
  );
};

export default Logout;