import { useMsal } from "@azure/msal-react";
import { postLogoutRedirectUri } from "../../authConfig"
import "./SignOutButton.css"

function signOutClickHandler(instance) {
    console.log("instance: ", instance)
    const logoutRequest = {
        account: instance.getAccountByHomeId("homeAccountId"),
        postLogoutRedirectUri: postLogoutRedirectUri
    }
    instance.logoutRedirect(logoutRequest);
}

// SignOutButton Component returns a button that invokes a redirect logout when clicked
export default function SignOutButton() {
    // useMsal hook will return the PublicClientApplication instance you provided to MsalProvider
    const { instance } = useMsal();

    // <div className="SignInButtonDiv" ><button className="SignInButton" onClick={() => signInClickHandler(instance)}>Sign In</button></div>
    return <div className="SignOutButtonDiv" ><button  className="SignOutButton" onClick={() => signOutClickHandler(instance)}>Sign Out</button></div>
};