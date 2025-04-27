// src/components/Login.tsx
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const [identifier, setIdentifier] = useState(''); // Handles both email/username
  const [password, setPassword] = useState('');
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await loginWithRedirect({
      authorizationParams: {
        connection: 'Username-Password-Authentication',
        [identifier.includes('@') ? 'email' : 'username']: identifier,
        password,
        prompt: 'login',
      },
    });
  };

  return (
    <div className="auth-form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          placeholder="Email or Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;