import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-gz44v1zmjnu7qk0x.us.auth0.com"
    clientId="OGbCy3NA4zDlhBUICM91TQa8qhz6tEN8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Navbar/>
    <App />
    <Footer/>
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

