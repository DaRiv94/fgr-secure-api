import { LogLevel } from "@azure/msal-browser";

// export const postLogoutRedirectUri = "http://localhost:3000"
export const postLogoutRedirectUri = process.env.REACT_APP_POST_LOGOUT_REDIRECT_URL
// export const postLogoutRedirectUri = "https://dariv94.github.io/fgr-secure-api/"

export const loginRequest = {
    scopes: ["openid","https://fgrsolutionsb2c.onmicrosoft.com/f5e3ba4f-960f-44c0-bd3d-1f0c4c959f0c/Hello"] // might be able to remove the hello
  };

export const msalConfig = {
    auth: {
        clientId: "4bb294af-8713-4f8e-913d-a7fb84eba271", //client of frontend app registration
        authority: "https://fgrsolutionsb2c.b2clogin.com/fgrsolutionsb2c.onmicrosoft.com/B2C_1_FGR_Secure_app_Frontend_signupandsignin", //before https://login.microsoftonline/com/common
        redirectUri: process.env.REACT_APP_LOGIN_REDIRECT_URL
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
                    default:	
                        console.warn(message);		
                    // case LogLevel.Warning:		
                    //     console.warn(message);		
                        return;		
                }	
            }	
        }	
    }
  };