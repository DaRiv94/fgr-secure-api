import { useMsal } from "@azure/msal-react";
import { postLogoutRedirectUri } from "../../authConfig"

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

    return <button onClick={() => signOutClickHandler(instance)}>Sign Out</button>
};