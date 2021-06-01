import React, { useState } from "react";
import "./APICaller.css"

export default function APICaller(props) {
    const [apiData, setApiData] = useState(null);

    async function RequestAPIData() {
        let apicall = props.apicall
        let response = await apicall(props.token)
        setApiData(response)
    }

    function ResetAPIData() {
        setApiData("")
    }

    return (<>
        <div className="APICallerDIV">
            <div className="APICallerNameDIV">
                <h5 className="APICallerName" >{props.name}</h5>
            </div>

            {/* <p>{props.description}</p> */}
            <div className="APICallerFunFactBtnDIV">
                <button className="APICallerFunFactBtn" onClick={RequestAPIData} >GET FUN FACT</button>
            </div>

            <div className="APICallerDataDIV">
                {apiData ? <p className="APICallerData" >{JSON.stringify(apiData)}</p> : <p className="APICallerData" >No API Data</p>}
            </div>
            <div className="APICallerClearBtnDIV">
                <button className="APICallerClearBtn" onClick={ResetAPIData} >Clear Fun Fact</button>
            </div>

        </div>


    </>)
}