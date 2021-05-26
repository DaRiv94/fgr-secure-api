
// Check out https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-sign-in?tabs=react
// getting access token https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-acquire-token?tabs=react
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import React, { Component } from 'react';
import "./HomePage.css"
import SignInButton from "./AuthComponents/SignInButton"
import SignOutButton from "./AuthComponents/SignOutButton"
import WelcomeUser from "./WelcomUser"
import ProfileContent from "./AuthComponents/ProfileContent"

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
