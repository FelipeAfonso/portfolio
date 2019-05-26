import { Redirect, Route, Switch, } from 'react-router-dom';
import { Container } from '@material-ui/core'
import React, { Component, Suspense } from 'react'
import AnimatedLogo from './AnimatedLogo';
import Home from './Home';


const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/home', name: 'Home', component: Home },
];

export default class DefaultLayout extends Component {
    render() {
        return (
            <main className="main">
                {/* <AppBreadcrumb appRoutes={routes}/> */}
                <Container fluid id="main-container">
                    <Suspense fallback={(<AnimatedLogo/>)}>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={props => (
                                            <route.component {...props} />
                                        )} />
                                ) : (null);
                            })}
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </Suspense>
                </Container>
            </main>
        )
    }
}
