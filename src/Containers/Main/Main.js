import React from 'react';
import classes from './Main.scss';

import Header from '../../Components/Header/Header';
import Currencies from '../Currencies/Currencies';

const Main = props => {


    return (
        <main className={classes.Main}>
            <Header />
            <Currencies />
        </main>
    );
}

export default Main;