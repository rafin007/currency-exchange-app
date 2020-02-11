import React, { useEffect, useState } from 'react';
import classes from './Currency.scss';

import sprite from '../../assets/sprite.svg';

import axios from 'axios';

import * as actions from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';

const Currency = props => {

    const dispatch = useDispatch();

    const baseCurrency = useSelector(state => state.baseCurrency);

    const [currentRate, setCurrentRate] = useState(0);

    const currencyDeleteHandler = (nation) => {
        dispatch(actions.deleteNation(nation));
    }


    useEffect(() => {
        axios.get(`https://free.currconv.com/api/v7/convert?q=${baseCurrency ? baseCurrency : 'USD'}_${props.currency}&compact=ultra&apiKey=cadab762875dc10f460a`).then(response => {
            setCurrentRate(Object.values(response.data)[0].toFixed(3));
        }).catch(error => console.log(error));

    }, [baseCurrency, dispatch, props.currency])

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
                <span>1 {baseCurrency ? baseCurrency : 'USD'} = {currentRate} {props.currency}</span>
            </div>
            <svg className={classes.Currency__cross} onClick={() => currencyDeleteHandler(props.currency)} >
                <use xlinkHref={`${sprite}#icon-circle-with-cross`} ></use>
            </svg>
        </div>
    );
}

export default Currency;