
// Check out https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-sign-in?tabs=react

// getting access token https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-acquire-token?tabs=react
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import React from "react";
import SignInButton from "./components/AuthComponents/SignInButton"
import SignOutButton from "./components/AuthComponents/SignOutButton"
import WelcomeUser from "./components/WelcomUser"
import ProfileContent from "./components/AuthComponents/ProfileContent"

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
