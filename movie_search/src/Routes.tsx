import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchPage from './components/SearchPage/SearchPage'
import MovieInfo from './components/MovieInfo/MovieInfo'
import MovieNotFound from './components/MovieNotFound/MovieNotFound'

const Routes = () => (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SearchPage} />
          <Route exact path='/movieInfo/:movieName' component={MovieInfo} />
          <Route exact path='/movieNotFound' component={MovieNotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;