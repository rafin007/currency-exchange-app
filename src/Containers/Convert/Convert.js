import React, { Fragment } from 'react';
import classes from './Convert.scss';

import ConvertedCurrency from '../../Components/ConvertedCurrency/ConvertedCurrency';

import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/actions/index';

const Convert = props => {

    const nations = useSelector(state => state.nations);
    const symbols = useSelector(state => state.symbols);

    const dispatch = useDispatch();

    const convertAmount = useSelector(state => state.convertAmount);

    const inputChangedHandler = (event) => {
        dispatch(actions.saveConvertAmount(event.target.value));
    }

    return (
        <div className={classes.Convert} >
            <div className={classes.Convert__inputHolder} >
                <input type="number" placeholder="Insert an amount" className={classes.Convert__input} onChange={inputChangedHandler} value={convertAmount !== 0 ? convertAmount : ''} />
            </div>
            <div className={classes.Convert__currenciesHolder} >
                {nations.length > 0 ? nations.map(nation => {
                    return <ConvertedCurrency key={nation} currency={nation} full={symbols[0][nation]} />
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