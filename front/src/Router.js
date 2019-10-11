import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./component/Home/home";
import MapComponent from "./component/Map/mapComponent";

class RouterComponent extends Component {
    noRouteMatch () {
        return (
         <div>
             <h1>Page 404</h1>
         </div>
        )
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/map" exact component={MapComponent}/>
                    <Route component={this.noRouteMatch}/>
                </Switch>
            </Router>
        )
    }
}

export default RouterComponent;
