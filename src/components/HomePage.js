
// Check out https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-sign-in?tabs=react
// getting access token https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-acquire-token?tabs=react
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import React, { Component } from 'react';
import "./HomePage.css"
import SignInButton from "./AuthComponents/SignInButton"
import SignOutButton from "./AuthComponents/SignOutButton"
// import WelcomeUser from "./WelcomUser"
// import ProfileContent from "./AuthComponents/ProfileContent"
import GetToken from "./AuthComponents/GetToken"
import APICaller from "./APICaller"
import {kubernetesfunfactdescription, microsoftfunfactdescription, computerhistoryfunfactdescription, frankierivierafunfactdescription} from "./apidescriptions"
import { CallAzureFunction } from "../api/azurefunctions"
import { CallLogicApp } from "../api/logicapp"
import { CallAKS_KubernetesFunFact, CallAKS_MicrosoftFunFact } from "../api/aks"

export class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedFile: "",
            loading: false,
            responseImage: "",
            message: "Select a file to upload.",
            jwtToken: ""

        }

        this.setToken = this.setToken.bind(this)
    }

    setToken(token) {
        this.setState({
            jwtToken: token
        });
    }

    render() {
        return (
            <div className="HomePageDiv" >
                <h1 className="topheader">FGR Secure API</h1>
                <AuthenticatedTemplate>
                        <div className="HomeInfoDiv">
                        <p>
                            You can learn more about this live demo <a rel="noreferrer" target="_blank" href="https://frankieriviera.com" >HERE</a>
                        </p>
                        </div>
                    {/* <p>This will only render if a user is signed-in.</p>
                    {this.state.jwtToken ? <p>TOKEN READY FOR API CALLS!</p>:<p>NO TOKEN</p>} */}
                    {/* <WelcomeUser /> */}
                    {/* <ProfileContent setToken={this.setToken}/> */}
                    {!this.state.jwtToken && <GetToken setToken={this.setToken} />}
                    <hr></hr>
                    <APICaller name={"Azure Kubernetes Service endpoint - Kubernetes Fun Facts"} description={kubernetesfunfactdescription}  apicall={CallAKS_KubernetesFunFact} token={this.state.jwtToken} />
                    <hr></hr>
                    <APICaller name={"Azure Kubernetes Service endpoint - Microsoft Fun Facts"} description={microsoftfunfactdescription} apicall={CallAKS_MicrosoftFunFact} token={this.state.jwtToken} />
                    <hr></hr>
                    <APICaller name={"Azure Function App endpoint - Computer History Fun Facts"} description={computerhistoryfunfactdescription} apicall={CallAzureFunction} token={this.state.jwtToken} />
                    <hr></hr>
                    <APICaller name={"Azure Logic App endpoint - Frankie Riviera Fun Facts"} description={frankierivierafunfactdescription} apicall={CallLogicApp} token={this.state.jwtToken} />
                    <hr></hr>
                    {/* <APICaller name={"MOCK ENDPOINT"} apicall={CallMockEndpoint} token={this.state.jwtToken} />
                    <hr></hr> */}


                    <SignOutButton />


                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <div className="HomeInfoDiv">
                        <p>
                            This UI demonstates the use of Azure Active Directory B2C in a Single Page Application.
                            It also demonstates access to backend APIs through the use of an Azure API Managment Gateway.
                            The APIs accessed through this gate way include Two different APIs within a Azure Kuberentes Service Cluster, An Azure Function, and an Azure Logic App.
                            Sign in using an existing Microsoft account, or Signup with an email to test out the Live APIS.
                        </p>
                        </div>
                    <SignInButton />
                </UnauthenticatedTemplate>

            </div>
        )
    }
}


export default HomePage;
