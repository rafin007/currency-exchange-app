import React, { useEffect, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import classes from './Main.scss';

import Header from '../../Components/Header/Header';
import Rates from '../Rates/Rates';
import Graphs from '../Graphs/Graphs';
import Convert from '../Convert/Convert';

import * as actions from '../../store/actions/index';
import { useDispatch } from 'react-redux';

const Main = props => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.retrieveRates());
    }, [dispatch]);

    let router = (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/compare" component={Graphs} />
                <Route path="/convert" component={Convert} />
                <Route path="/" exact component={Rates} />
            </Switch>
        </Fragment>
    );

    if (props.location.pathname === '/compare') {
        router = (
            <Switch>
                <Route path="/compare" component={Graphs} />
                <Route path="/convert" component={Convert} />
                <Route path="/" exact component={Rates} />
            </Switch>
        );
    }


    return (
        <main className={classes.Main}>
            {router}
        </main>
    );
}

export default withRouter(Main);