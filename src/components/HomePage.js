
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
            message: "Select a file to upload."

        }

    }

    render() {
        return (
            <div>
                <h1 className="topheader">Secure API</h1>
                <AuthenticatedTemplate>
                    <p>This will only render if a user is signed-in.</p>
                    <WelcomeUser />
                    <ProfileContent />
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
