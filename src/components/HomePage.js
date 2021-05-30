
// Check out https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-sign-in?tabs=react
// getting access token https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-acquire-token?tabs=react
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import React, { Component } from 'react';
import "./HomePage.css"
import SignInButton from "./AuthComponents/SignInButton"
import SignOutButton from "./AuthComponents/SignOutButton"
import WelcomeUser from "./WelcomUser"
import ProfileContent from "./AuthComponents/ProfileContent"
import GetToken from "./AuthComponents/GetToken"
import APICaller from "./APICaller"
import { CallMockAPIEndpoint } from "../api/apimanagementmockapi"
import { CallAzureFunction } from "../api/azurefunctions"
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
            <div>
                <h1 className="topheader">Secure API</h1>
                <AuthenticatedTemplate>
                    {/* <p>This will only render if a user is signed-in.</p>
                    {this.state.jwtToken ? <p>TOKEN READY FOR API CALLS!</p>:<p>NO TOKEN</p>} */}
                    {/* <WelcomeUser /> */}
                    {/* <ProfileContent setToken={this.setToken}/> */}
                    <GetToken setToken={this.setToken} />

                    <hr></hr>
                    <APICaller name={"MOCK ENDPOINT"} apicall={CallMockAPIEndpoint} token={this.state.jwtToken} />
                    <hr></hr>
                    <APICaller name={"Azure Function ENDPOINT"} apicall={CallAzureFunction} token={this.state.jwtToken} />
                    <hr></hr>
                    <APICaller name={"Azure AKS ENDPOINT Kubernetes Fun Facts"} apicall={CallAKS_KubernetesFunFact} token={this.state.jwtToken} />
                    <hr></hr>
                    <APICaller name={"Azure AKS ENDPOINT Microsoft Fun Facts"} apicall={CallAKS_MicrosoftFunFact} token={this.state.jwtToken} />
                    <hr></hr>
                    <SignOutButton />


                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    {/* <p>This page will only render if a user is not signed-in.</p> */}
                    <SignInButton />
                </UnauthenticatedTemplate>

            </div>
        )
    }
}


export default HomePage;
