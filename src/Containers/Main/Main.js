import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './Main.scss';

import Header from '../../Components/Header/Header';
import Rates from '../Rates/Rates';
import Graphs from '../Graphs/Graphs';

import * as actions from '../../store/actions/index';
import { useDispatch } from 'react-redux';

const Main = props => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.retrieveRates());
    }, [dispatch]);


    return (
        <main className={classes.Main}>
            <Header />
            <Switch>
                <Route path="/compare" component={Graphs} />
                <Route path="/" exact component={Rates} />
            </Switch>
        </main>
    );
}

export default Main;