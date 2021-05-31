// import { useMsal } from "@azure/msal-react";
import React, { useState } from "react";
import "./APICaller.css"
// import { loginRequest } from "../../authConfig"
// import { CallMockAPIEndpoint } from "../../api/azurefunctions"

// import { useIsAuthenticated } from "@azure/msal-react";

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
        // console.log("RequestAPIData:", response)
        // console.log(typeof(response))
        setApiData(response)
    }

    function ResetAPIData() {
        setApiData("")
    }



    return (<>
        <div className="APICallerDIV">
            <div className="APICallerNameDIV">
                <h5 className="APICallerName" >{props.name}</h5>
            </div>

            {/* <p>{props.description}</p> */}
            <div className="APICallerFunFactBtnDIV">
                <button className="APICallerFunFactBtn" onClick={RequestAPIData} >GET FUN FACT</button>
            </div>

            <div className="APICallerDataDIV">
                {apiData ? <p className="APICallerData" >{JSON.stringify(apiData)}</p> : <p className="APICallerData" >No API Data</p>}
            </div>
            <div className="APICallerClearBtnDIV">
                <button className="APICallerClearBtn" onClick={ResetAPIData} >Clear Fun Fact</button>
            </div>

        </div>


    </>)
}