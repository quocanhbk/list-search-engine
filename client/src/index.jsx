import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication} from '@azure/msal-browser';

const config = {
  auth: {
    clientId: 'f8626081-3f81-4909-bcef-14f0a974f079',
    authority: 'https://login.microsoftonline.com/801edb4c-29ba-4d07-80b1-16a955dbf20d',
  }
}

const pca = new PublicClientApplication(config);

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


