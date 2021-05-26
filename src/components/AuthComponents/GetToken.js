import { useMsal } from "@azure/msal-react";
import React, { useEffect } from "react";
import { loginRequest } from "../../authConfig"

export default function ProfileContent(props) {
    const { instance, accounts } = useMsal();

    //The User should be Authenticated already
    // Otherwise I would use const isAuthenticated = useIsAuthenticated();
    useEffect(() => {
        instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        }).then(async (response) => {
            console.log("RequestProfileData response:", response)
            props.setToken(response.accessToken)

        });
    }, []);

    return (<></>)
}