import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';

export const PrivateRoute: React.FC<{ path: string; exact?: boolean,  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>}> = ({
    path,
    component,
    exact
}) => {

    if (!localStorage.getItem('user')) {
        return <Redirect to="/auth" />;
    }
    return (
        <Route exact={exact} path={path} component={component} />
    );
};