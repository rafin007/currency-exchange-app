import React from 'react';
import classes from './Currency.scss';

import sprite from '../../assets/sprite.svg';

import * as actions from '../../store/actions/index';
import { useDispatch } from 'react-redux';

const Currency = props => {

    const dispatch = useDispatch();

    const currencyDeleteHandler = (nation) => {
        dispatch(actions.deleteNation(nation));
    }

    return (
        <div className={classes.Currency} >
            <div className={classes.Nation__holder} >
                <img src={`https://www.countryflags.io/${props.nation}/shiny/64.png`} alt="Country logo" className={classes.Currency__nation} />
            </div>
            <div className={classes.Currency__details} >
                <span className={classes.Currency__abbreviation} >{props.currency}</span>
                <span className={classes.Currency__full} >{props.full}</span>
            </div>
            <div className={classes.Currency__comparison} >
                <span>1 USD = 0.77 GBP</span>
            </div>
            <svg className={classes.Currency__cross} onClick={() => currencyDeleteHandler(props.currency)} >
                <use xlinkHref={`${sprite}#icon-circle-with-cross`} ></use>
            </svg>
        </div>
    );
}

export default Currency;