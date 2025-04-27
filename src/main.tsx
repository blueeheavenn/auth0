import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import RouteProviderService from './Login/RouteProviderService.tsx';
import {Auth0Provider} from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render (
    <StrictMode>
        <BrowserRouter>
        <RouteProviderService>
                <Auth0Provider
                    domain="dev-wnvib74afwp48e4v.us.auth0.com"
                    clientId="lhNDIDSzmVD6OJTL8DbTtA1PICIHNNCv"
            authorizationParams={
                { redirect_uri: window.location.origin }
                
        }>
                <App />
            
            </Auth0Provider>
        </RouteProviderService>
        </BrowserRouter>
    </StrictMode>
);
