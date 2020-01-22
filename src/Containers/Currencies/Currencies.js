import React from 'react';
import classes from './Currencies.scss';

import Currency from '../../Components/Currency/Currency';

const Currencies = props => {

    return (
        <div className={classes.Currencies} >
            <Currency />
            <Currency />
        </div>
    );
}

export default Currencies;