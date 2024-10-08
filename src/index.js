import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const audience = process.env.REACT_APP_AUDIENCE;

root.render(
  <Auth0Provider
    domain="dev-wf4nmcn4xldpb5nl.us.auth0.com"
    clientId="3YXkgPWEcuATKTy6XUVIHdcsKT8ePl0Z"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: `${audience}`,
    }}
    useRefreshTokens={true}
    cacheLocation='localstorage'
  >
    <App />
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
