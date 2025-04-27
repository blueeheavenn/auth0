// main.tsx (simplified)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-wnvib74afwp48e4v.us.auth0.com"
        clientId="lhNDIDSzmVD6OJTL8DbTtA1PICIHNNCv"
        authorizationParams={{
          redirect_uri: window.location.origin,
          scope: "openid profile"
        }}
      >
        <App /> {/* All routing now handled inside App */}
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);