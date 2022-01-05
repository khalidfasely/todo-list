import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFound";

export const history = createHistory();

const AppRoute = () => (
    <Router history={history}>
        <div>
          <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/home" component={HomePage}/>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
    </Router>
)

export default AppRoute;