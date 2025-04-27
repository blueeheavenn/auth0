import { useAuth0 , RedirectLoginOptions, AppState} from '@auth0/auth0-react';

const Signup = () => {
  const { loginWithRedirect } = useAuth0();
    interface options extends RedirectLoginOptions<AppState>{
     screen_hint?:string
    }
    const options: options = {
          screen_hint: 'signup',
    }
  return (
    <button
      onClick={() =>
        loginWithRedirect(options) // 
      }
    >
      Log In
    </button>
  );
};

export default Signup ;