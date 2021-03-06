import { useMsal } from "@azure/msal-react";
import React, { useState, useEffect } from "react";
import { loginRequest } from "../../authConfig"
import { CallMockAPIEndpoint } from "../../api/apimanagementmockapi"

// import { useIsAuthenticated } from "@azure/msal-react";

export default function ProfileContent(props) {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);
    const [backendMockData, setBackendMockData] = useState(null);

    // const isAuthenticated = useIsAuthenticated();

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
    });

    function RequestProfileData() {
        console.log("RequestProfileData MSAL instance", instance)
        console.log("RequestProfileData MSAL accounts", accounts)
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        }).then(async (response) => {
            console.log("RequestProfileData response:", response)
            setGraphData(response)

        });
    }

    async function RequestMockData() {
        let response = await CallMockAPIEndpoint(graphData.accessToken)
        console.log("RequestMockData:", response)
        setBackendMockData(response)
    }

    return (<>
        <h5 className="card-title">PROFILE CONTENT {accounts[0].name}</h5>
        {graphData ?

            <>
                <p>{JSON.stringify(graphData.accessToken)}</p>
                <button onClick={RequestMockData} >CALL MOCK API ENDPOINT</button>
                {backendMockData ? <>{backendMockData}</> : <p>No Mock Data</p>}
            </>
            :
            <button onClick={RequestProfileData}>Request Profile Information</button>

        }
    </>)
}