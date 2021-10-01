import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from './components/SearchPage/SearchPage'
import MovieInfo from './components/MovieInfo/MovieInfo'
import MovieNotFound from './components/MovieNotFound/MovieNotFound'
import {Login} from "./components/Login/Login";
import {PrivateRoute} from "./components/PrivateRoute";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/auth" component={Login} />
            <PrivateRoute exact path="/" component={SearchPage} />
            <PrivateRoute exact path="/movieInfo/:movieName" component={MovieInfo} />
            <PrivateRoute exact path="/movieNotFound" component={MovieNotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;