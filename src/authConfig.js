import { LogLevel } from "@azure/msal-browser";

export const loginRequest = {
    scopes: ["openid","https://fgrsolutionsb2c.onmicrosoft.com/api/demo.read","https://fgrsolutionsb2c.onmicrosoft.com/api/demo.write"]
    // scopes: ["openid","https://fgrsolutionsb2c.onmicrosoft.com/2820b95e-ac83-4f0a-b7dd-d1d76aeee869/demo.read"]
  };

export const msalConfig = {
    auth: {
        clientId: "b4472f17-dacf-42ed-ad2d-4901f18d1974", //before client was 92e748f9-a1ec-4e0d-b7fd-7dfccd9b9da1
        authority: "https://fgrsolutionsb2c.b2clogin.com/fgrsolutionsb2c.onmicrosoft.com/B2C_1_signupsignin1", //before https://login.microsoftonline/com/common
      //   redirectUri: "https://fgrsecure.surge.sh"
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