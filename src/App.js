import React from "react";
import {HashRouter,Redirect,Switch} from "react-router-dom"
import routerEach from "./utils/routerEach"
import {configRoute} from "./router"
class App extends React.Component {
    
    render() {
        return (
           <HashRouter>
               <Switch>
                   <Redirect from="/" to="/home" exact/>
                   {routerEach(configRoute)}
               </Switch>
              
           </HashRouter>
        )
    }
}

export default App