import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom'; 

import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <DashboardRoutes />
            </Switch>
            <Redirect to="home"/>
        </Router>
    )
}
 