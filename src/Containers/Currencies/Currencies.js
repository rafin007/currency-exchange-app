import React, { Fragment } from 'react';
import classes from './Currencies.scss';

import { useSelector } from 'react-redux';

import Currency from '../../Components/Currency/Currency';

const Currencies = props => {

    const nations = useSelector(state => state.nations);
    const symbols = useSelector(state => state.symbols);

    // console.log(symbols);

    return (
        <div className={classes.Currencies} >
            {nations.length > 0 ? nations.map(nation => {
                return <Currency nation={nation.toString().substring(0, 2)} key={nation} currency={nation} full={symbols[0][nation].currencyName} />
            }) : <Fragment>
                    <p className={classes.instruction} >Your searched currencies will appear here</p>
                    <p className={classes.instruction} >Default base currency is <span>USD</span></p>
                </Fragment>
            }
        </div>
    );
}

export default Currencies;