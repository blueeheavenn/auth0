
import { WebAuth } from 'auth0-js';
const auth0 = new WebAuth({
  domain: 'dev-wnvib74afwp48e4v.us.auth0.com',
  clientID: 'lhNDIDSzmVD6OJTL8DbTtA1PICIHNNCv',
  redirectUri: 'https://your-host/callback',
  responseType: 'code', // PKCE flow
  scope: 'openid profile email'
});

// Custom login with username/password
export const login = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    auth0.login({
      realm: 'Username-Password-Authentication',
      username,
      password
    }, (err, result) => err ? reject(err) : resolve(result));
  });
}; 

// Signup with email/password
export const signup = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    auth0.signup({
      connection: 'Username-Password-Authentication',
      email,
      password
    }, (err, result) => err ? reject(err) : resolve(result));
  });
};

// Handle callback
export const handleAuthCallback = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, result) => err ? reject(err) : resolve(result));
  });
};

// Get user profile
export const getUserProfile = (accessToken: string) => {
  return new Promise((resolve, reject) => {
    auth0.client.userInfo(accessToken, (err, profile) => err ? reject(err) : resolve(profile));
  });
};

// Logout
export const logout = () => {
  auth0.logout({
    returnTo: 'https://auth0-v43l--5173--d4eba4a9.local-credentialless.webcontainer.io/'
  });
};
