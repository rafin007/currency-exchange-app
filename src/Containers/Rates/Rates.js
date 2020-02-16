import React from 'react';
import classes from './Rates.scss';
import Currencies from '../Currencies/Currencies';

const Rates = props => {

    const removeSearcher = () => {
        const searcher = document.getElementById('search__results');
        searcher.style.display = 'none';
    }

    return (
        <div onClick={removeSearcher} className={classes.Rates} >
            <Currencies />
        </div>
    );
}

export default Rates;