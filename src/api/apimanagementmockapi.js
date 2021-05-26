import axios from "axios";

export async function CallMockAPIEndpoint(accessToken){
  
    const options = {
      headers: {'Authorization': accessToken}
    };
    
    let response = await axios.get('https://fgr-secure-api-management.azure-api.net/mock1/mockget', options);
    // console.log("CallMockAPIEndpoint response: ",response)
    
    return response.data
}