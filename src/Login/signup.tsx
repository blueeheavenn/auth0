// src/components/Signup.tsx
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Signup = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const { loginWithRedirect } = useAuth0();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
        connection: 'Username-Password-Authentication',
        [identifier.includes('@') ? 'email' : 'username']: identifier,
        password,
      },
    });
  };

  return (
    <div className="auth-form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;