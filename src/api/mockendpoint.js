
import axios from "axios";

export async function CallMockEndpoint(accessToken){
  
    const options = {
      headers: {'jwtAuthorization': accessToken}
    };
    
    let response = await axios.get('https://fgr-secure-api-management.azure-api.net/mock-endpoint/mockget', options);
    
    return response.data
}