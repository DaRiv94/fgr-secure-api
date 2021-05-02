import React, { Component } from 'react';
// import Backdrop from '@material-ui/core/Backdrop';
// import axios from 'axios';
import "./HomePage.css"
// import BeatLoader from "react-spinners/BeatLoader";

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

                
            </div>
        )
    }
}


export default HomePage;
