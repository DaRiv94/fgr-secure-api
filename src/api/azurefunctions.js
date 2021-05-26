import axios from "axios";

export async function CallAzureFunction(accessToken){
  
    const options = {
      headers: {'Authorization': accessToken}
    };
    
    let response = await axios.get('https://fgr-secure-api-management.azure-api.net/fgr-secure-function-app-1/HttpTrigger1', options);
    // console.log("CallAzureFunction response: ",response)
    
    return response.data
}