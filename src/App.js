
import React from "react";
import HomePage from "./components/HomePage"
// import { withMsal } from "@azure/msal-react";
import { useIsAuthenticated } from "@azure/msal-react";

// const WithMsalHomePage = withMsal(HomePage);

// class App extends React.Component {
//   constructor(props) {
//     super(props)
// }
//   render() {
//       return (
          
//               <WithMsalHomePage instance={this.props.instance} />
          
//       );
//   }
// }

function App(props) {
  const isAuthenticated = useIsAuthenticated();
  console.log("APP isAuthenticated: ",isAuthenticated)
  return (
    <>
      <HomePage instance={props.instance} isAuthenticated={isAuthenticated}/>
      {/* <WithMsalHomePage instance={props.instance} /> */}
    </>
  )
}

export default App;
