import React from "react";
import { useMsal } from "@azure/msal-react";

function signInClickHandler(instance) {
    instance.loginRedirect();
}

// SignInButton Component returns a button that invokes a popup login when clicked
export default function SignInButton() {
    // useMsal hook will return the PublicClientApplication instance you provided to MsalProvider
    const { instance } = useMsal();

    return <button onClick={() => signInClickHandler(instance)}>Sign In</button>
};