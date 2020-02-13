import React, { Fragment, useState } from 'react';
import classes from './Convert.scss';

import ConvertedCurrency from '../../Components/ConvertedCurrency/ConvertedCurrency';

import { useSelector } from 'react-redux';

const Convert = props => {

    const nations = useSelector(state => state.nations);
    const symbols = useSelector(state => state.symbols);

    const [value, setValue] = useState(0);

    const inputChangedHandler = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className={classes.Convert} >
            <div className={classes.Convert__inputHolder} >
                <input type="number" placeholder="Insert an amount" className={classes.Convert__input} onChange={inputChangedHandler} />
            </div>
            <div className={classes.Convert__currenciesHolder} >
                {nations.length > 0 ? nations.map(nation => {
                    return <ConvertedCurrency key={nation} currency={nation} full={symbols[0][nation]} value={value} />
                }) : <Fragment>
                        <p className={classes.instruction} >Your searched currencies will appear here</p>
                        <p className={classes.instruction} >Default base currency is <span>USD</span></p>
                    </Fragment>
                }
            </div>
        </div>
    );
}

export default Convert;