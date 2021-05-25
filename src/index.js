import React from 'react';
import ReactDOM from 'react-dom';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import App from './App';
import { msalConfig } from "./authConfig";

// create PublicClientApplication instance
const publicClientApplication = new PublicClientApplication(msalConfig);

// Wrap your app component tree in the MsalProvider component
ReactDOM.render(
    <React.StrictMode>
        <MsalProvider instance={publicClientApplication}>
            <App instance={publicClientApplication} />
        </ MsalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

