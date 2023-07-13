import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
// import { Auth0Provider } from '@auth0/auth0-react';
import { AuthContextProvider } from './context/Authcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //dev-l8nqfh38rzwxz311.us.auth0.com
  //9NOEr9S7lJ7h7E2jJJE29gLya1TDmxRj
  <React.StrictMode>
  <Auth0Provider
   domain="dev-l8nqfh38rzwxz311.us.auth0.com"
   clientId="9NOEr9S7lJ7h7E2jJJE29gLya1TDmxRj"
  //  authorizationParams={{
     redirect_uri={ window.location.origin}
  //  }}
  // cacheLocation='localStorage'
   >
  <GithubProvider>
    <App />
    </GithubProvider>
  </Auth0Provider>
   
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
