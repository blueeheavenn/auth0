// src/components/Navbar.tsx
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav>
      {!isAuthenticated ? (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <Link to="/profile">Profile</Link>
      )}
    </nav>
  );
};

export default Navbar;