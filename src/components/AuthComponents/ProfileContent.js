import { useMsal } from "@azure/msal-react";
import React, { useState } from "react";
import axios from "axios";

async function callBackendAPI(accessToken){

    const options = {
      headers: {'Authorization': `Bearer ${accessToken}`}
    };
    
    let response = await axios.get('http://localhost:5000/hello/', options);
    console.log("response: ",response)
    return response.data
  }

export default function ProfileContent() {
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