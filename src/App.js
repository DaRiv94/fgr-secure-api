
import React from "react";
import HomePage from "./components/HomePage"
import { useIsAuthenticated } from "@azure/msal-react";

function App(props) {
  const isAuthenticated = useIsAuthenticated();
  console.log("APP isAuthenticated: ",isAuthenticated)
  return (
    <>
      <HomePage instance={props.instance} isAuthenticated={isAuthenticated}/>
    </>
  )
}

export default App;
