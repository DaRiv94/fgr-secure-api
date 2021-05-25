
// Check out https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-sign-in?tabs=react

// getting access token https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-acquire-token?tabs=react
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import React, { useState } from "react";
import axios from "axios";

function signInClickHandler(instance) {
  instance.loginRedirect();
}

// SignInButton Component returns a button that invokes a popup login when clicked
function SignInButton() {
  // useMsal hook will return the PublicClientApplication instance you provided to MsalProvider
  const { instance } = useMsal();

  return <button onClick={() => signInClickHandler(instance)}>Sign In</button>
};

function WelcomeUser() {
  const { accounts } = useMsal();
  const username = accounts[0].username;

  return <p>Welcome, {username}</p>
}

function signOutClickHandler(instance) {
  console.log("instance: ", instance)
  const logoutRequest = {
    account: instance.getAccountByHomeId("homeAccountId"),
    postLogoutRedirectUri: "https://fgrsecure.surge.sh"
    // postLogoutRedirectUri: "http://localhost:3000"
  }
  instance.logoutRedirect(logoutRequest);
}

// SignOutButton Component returns a button that invokes a redirect logout when clicked
function SignOutButton() {
  // useMsal hook will return the PublicClientApplication instance you provided to MsalProvider
  const { instance } = useMsal();

  return <button onClick={() => signOutClickHandler(instance)}>Sign Out</button>
};

async function callBackendAPI(accessToken){

  const options = {
    headers: {'Authorization': `Bearer ${accessToken}`}
  };
  
  let response = await axios.get('http://localhost:5000/hello/', options);
  console.log("response: ",response)
  return response.data
}


 function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  const [backendapiData, setBackendapiData] = useState(null);
  const [backendMockData, setBackendMockData] = useState(null);

  const loginRequest = {
    scopes: ["openid","https://fgrsolutionsb2c.onmicrosoft.com/api/demo.read","https://fgrsolutionsb2c.onmicrosoft.com/api/demo.write"]
    // scopes: ["openid","https://fgrsolutionsb2c.onmicrosoft.com/2820b95e-ac83-4f0a-b7dd-d1d76aeee869/demo.read"]
  };

   function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    }).then(async (response) => {
      console.log("RequestProfileData response:", response)
      setGraphData(response)
      let BackendAPI_response = await callBackendAPI(response.accessToken)
      setBackendapiData(BackendAPI_response)
      // callMsGraph(response.accessToken).then(response => setGraphData(response));

    });
  }

  async function CallMockAPIEndpoint(){

      const options = {
        headers: {'Authorization': graphData.accessToken}
      };
      
      let response = await axios.get('https://fgr-secure-api-management.azure-api.net/fgr-secure-function-app-1/HttpTrigger1', options);
      // let response = await axios.get('https://fgr-secure-api-management.azure-api.net/mock1/mockget', options);
      console.log("CallMockAPIEndpoint response: ",response)
      setBackendMockData(response.data)
      return response.data
  }


  return (<>
    <h5 className="card-title">PROFILE CONTENT {accounts[0].name}</h5>
    {graphData ?
      // <ProfileData graphData={graphData} />
      <>
      <p>{JSON.stringify(graphData.accessToken)}</p>
      <p>{JSON.stringify(backendapiData)}</p>
      {/* <p>{callBackendAPI(graphData.accessToken)}</p> */}
      

      <button onClick={CallMockAPIEndpoint} >CALL MOCK API ENDPOINT</button>
      {backendMockData ? <>{backendMockData}</>:<p>No Mock Data</p>}
      </>
      :
      <button onClick={RequestProfileData}>Request Profile Information</button>
      
    }
  </>)
}




// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  return (
    <>
      <AuthenticatedTemplate>
        <p>This will only render if a user is signed-in.</p>
        <WelcomeUser />
        <ProfileContent/>
        <SignOutButton />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>This page will only render if a user is not signed-in.</p>
        <SignInButton />
      </UnauthenticatedTemplate>
    </>
  )
}

export default App;


// import { InteractionType } from "@azure/msal-browser";
// import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
// import './App.css';
// // import { Switch, Route } from 'react-router-dom';
// // import HomePage from "./components/HomePage"

// function WelcomeUser() {
//   const { accounts } = useMsal();
//   const username = accounts[0].username;

//   return <p>Welcome, {username}</p>
// }

// function App() {
//   return (
//     <div >
//       <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
//         <p>This will only render if a user is signed-in.</p>
//         <WelcomeUser />
//       </MsalAuthenticationTemplate>
//       {/* <HomePage/> */}
//     </div>
//   );
// }

// export default App;
