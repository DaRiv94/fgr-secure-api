
// Check out https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-sign-in?tabs=react
// getting access token https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-acquire-token?tabs=react
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import React, { Component } from 'react';
import "./HomePage.css"
import SignInButton from "./AuthComponents/SignInButton"
import SignOutButton from "./AuthComponents/SignOutButton"
import WelcomeUser from "./WelcomUser"
import ProfileContent from "./AuthComponents/ProfileContent"
import { loginRequest } from "../authConfig"

export class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedFile: "",
            loading: false,
            responseImage: "",
            message: "Select a file to upload.",
            jwtToken:""

        }

        this.setToken=this.setToken.bind(this)
    }

    //methods on instance can be found here https://azuread.github.io/microsoft-authentication-library-for-js/ref/interfaces/_azure_msal_browser.ipublicclientapplication.html
    componentWillMount() {
        let instance = this.props.instance
        let accounts=this.props.instance.getAllAccounts()

        //TODO NEED TO CHECK FOR LOGINED BEFORE RUNNING THIS
        // instance.acquireTokenSilent({
        //     ...loginRequest,
        //     account: accounts[0]
        // }).then(async (response) => {
        //     console.log("componentWillMount response:", response)

        //     console.log("TOKEN:",response.accessToken)
        //     this.setState({
        //         jwtToken:response.accessToken
        //     });
        //     console.log("this.jwtToken",this.state.jwtToken)
        //     // props.setToken(response.accessToken)

        // });
    }

    setToken(token){
        console.log("TOKEN:",token)
        this.setState({
            jwtToken:token
        });
        console.log("this.jwtToken",this.state.jwtToken)
    }

    render() {
        return (
            <div>
                <h1 className="topheader">Secure API</h1>
                <AuthenticatedTemplate>
                    <p>This will only render if a user is signed-in.</p>
                    {this.state.jwtToken ? <p>{"JWT Token"+this.state.jwtToken}</p>:<p>NO TOKEN</p>}
                    <WelcomeUser />
                    <ProfileContent setToken={this.setToken}/>
                    <SignOutButton />
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <p>This page will only render if a user is not signed-in.</p>
                    <SignInButton />
                </UnauthenticatedTemplate>

            </div>
        )
    }
}


export default HomePage;
