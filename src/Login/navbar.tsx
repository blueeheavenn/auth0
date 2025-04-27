import { useAuth0, RedirectLoginOptions, AppState } from '@auth0/auth0-react';


const Navbar = () => {
  const { loginWithRedirect, isAuthenticated,  } = useAuth0();
 interface options extends RedirectLoginOptions < AppState > {
     screen_hint: string   
 }
    const options: options = {
  screen_hint: 'signup',
  // other options...
};
  return (
    <nav>
    {!isAuthenticated ? (
              <>
          <button onClick={() => loginWithRedirect(options)}>
            Sign Up 
          </button>
          <button onClick={() => loginWithRedirect()}>
            Log In
          </button>
        </>
      ) : (
        <p>Welcome back!</p>
      )}
    </nav>
  );
};

export default Navbar;