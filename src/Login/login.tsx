import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (<div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Login Page</h1>
      <button
        onClick={() => loginWithRedirect()}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Log In
    </button>;
    </div>)
};

export default Login;