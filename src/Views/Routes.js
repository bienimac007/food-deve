import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Favourite from "./Favourite";
import Detail from "./Detail";
import Home from "./Home";
import history from './history';
import Notification from './Notification'
import Account from './Account'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Details/:id" component={Detail} />
                    <Route path="/favorite" component={Favourite} />
                    <Route path="/notification" component={Notification} />
                    <Route path="/account" component={Account} />
          
                </Switch>
            </Router>
        )
    }
}