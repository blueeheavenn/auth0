import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import RouteProviderService from './Login/RouteProviderService.tsx';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-q0r7rb8pix0d2308.us.auth0.com"
      clientId="2H3HZpTFBHq6a6WOtnKobdcYjLUgjmKk"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouteProviderService>
        <App />
      </RouteProviderService>
    </Auth0Provider>
  </StrictMode>
);
