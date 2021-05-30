import axios from "axios";

export async function CallLogicApp(accessToken){
  
    const options = {
      headers: {'jwtAuthorization': accessToken}
    };
    
    let response = await axios.get('https://fgr-secure-api-management.azure-api.net/frankie/request/paths/invoke/', options);
    // console.log("CallLogicApp response: ",response)
    
    const funfact = response.data.funfact
    
    return funfact
}