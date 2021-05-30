import axios from "axios";

export async function CallAKS_KubernetesFunFact(accessToken){
  
    const options = {
      headers: {'jwtAuthorization': accessToken}
    };
    
    let response = await axios.get('https://fgr-secure-api-management.azure-api.net/aks/kubernetes/funfact', options);

    let i = Math.floor(Math.random() * response.data.funfacts.length); 
    
    const funfact = response.data.funfacts[i].fun_fact
    
    return funfact
}

export async function CallAKS_MicrosoftFunFact(accessToken){
  
    const options = {
      headers: {'jwtAuthorization': accessToken}
    };
    
    let response = await axios.get('https://fgr-secure-api-management.azure-api.net/aks/microsoft/funfact', options);
    
    let i = Math.floor(Math.random() * response.data.funfacts.length); 
    
    const funfact = response.data.funfacts[i].fun_fact
    
    return funfact
}
