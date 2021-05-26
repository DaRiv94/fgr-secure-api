import { useMsal } from "@azure/msal-react";
import React, { useState, useEffect } from "react";
// import { loginRequest } from "../../authConfig"
// import { CallMockAPIEndpoint } from "../../api/azurefunctions"

import { useIsAuthenticated } from "@azure/msal-react";

export default function APICaller(props) {
    // const { instance, accounts } = useMsal();
    const [apiData, setApiData] = useState(null);
    // const [graphData, setGraphData] = useState(null);
    // const [backendMockData, setBackendMockData] = useState(null);

    // const isAuthenticated = useIsAuthenticated();

    //The User should be Authenticated already
    // Otherwise I would use const isAuthenticated = useIsAuthenticated();
    // useEffect(() => {
    //     instance.acquireTokenSilent({
    //         ...loginRequest,
    //         account: accounts[0]
    //     }).then(async (response) => {
    //         console.log("RequestProfileData response:", response)
    //         props.setToken(response.accessToken)

    //     });
    // }, []);

    // function RequestProfileData() {
    //     console.log("RequestProfileData MSAL instance", instance)
    //     console.log("RequestProfileData MSAL accounts", accounts)
    //     // Silently acquires an access token which is then attached to a request for MS Graph data
    //     instance.acquireTokenSilent({
    //         ...loginRequest,
    //         account: accounts[0]
    //     }).then(async (response) => {
    //         console.log("RequestProfileData response:", response)
    //         setGraphData(response)

    //     });
    // }

    async function RequestAPIData() {
        let apicall = props.apicall
        let response = await apicall(props.token)
        console.log("RequestAPIData:", response)
        console.log(typeof(response))
        setApiData(response)
    }

     function ResetAPIData() {
        setApiData("")
    }



    return (<>
        <h5>API {props.name}</h5>
        <button onClick={RequestAPIData} >CALL {props.name}</button>
        
        {apiData ? <>{JSON.stringify(apiData)}</> : <p>No API Data</p>}
        <button onClick={ResetAPIData} >Reset API Data</button>

    </>)
}