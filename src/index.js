import React from 'react';
import ReactDOM from 'react-dom';
import { PublicClientApplication, LogLevel } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import App from './App';

// Configuration object constructed.
// const config = {
//     auth: {
//         clientId: 'your_client_id'
//     }
// };

const msalConfig = {
  auth: {
      clientId: "b4472f17-dacf-42ed-ad2d-4901f18d1974", //before client was 92e748f9-a1ec-4e0d-b7fd-7dfccd9b9da1
      authority: "https://fgrsolutionsb2c.b2clogin.com/fgrsolutionsb2c.onmicrosoft.com/B2C_1_signupsignin1", //before https://login.microsoftonline/com/common
      redirectUri: "http://localhost:3000/"
  },
  cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {	
      loggerOptions: {	
          loggerCallback: (level, message, containsPii) => {	
              if (containsPii) {		
                  return;		
              }		
              switch (level) {		
                  case LogLevel.Error:		
                      console.error(message);		
                      return;		
                  case LogLevel.Info:		
                      console.info(message);		
                      return;		
                  case LogLevel.Verbose:		
                      console.debug(message);		
                      return;		
                  case LogLevel.Warning:		
                      console.warn(message);		
                      return;		
              }	
          }	
      }	
  }
};

// create PublicClientApplication instance
const publicClientApplication = new PublicClientApplication(msalConfig);
// const publicClientApplication = new PublicClientApplication(config);

// Wrap your app component tree in the MsalProvider component
ReactDOM.render(
    <React.StrictMode>
        <MsalProvider instance={publicClientApplication}>
            <App />
        </ MsalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
