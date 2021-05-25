
import React from "react";
import HomePage from "./components/HomePage"

function App(props) {
  return (
    <>
      <HomePage instance={props.instance} />
    </>
  )
}

export default App;
