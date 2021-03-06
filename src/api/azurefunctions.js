import axios from "axios";

export async function CallAzureFunction(accessToken){
  
    const options = {
      headers: {'jwtAuthorization': accessToken}
    };
    
    let response = await axios.get('https://fgr-secure-api-management.azure-api.net/function-app/ComputerFunFacts', options);
    
    const funfact = response.data.funfact
    
    return funfact
}