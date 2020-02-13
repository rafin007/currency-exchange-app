import React, { useEffect, useState } from 'react';
import classes from './ConvertedCurrency.scss';

import { useSelector } from 'react-redux';

import axios from 'axios';

const ConvertedCurrency = props => {

    const [currentRate, setCurrentRate] = useState(0);

    const baseCurrency = useSelector(state => state.baseCurrency);

    useEffect(() => {
        axios.get(`https://free.currconv.com/api/v7/convert?apiKey=cadab762875dc10f460a&q=${baseCurrency ? baseCurrency : 'USD'}_${props.currency}&compact=ultra`).then(response => {
            setCurrentRate(Object.values(response.data)[0].toFixed(3));
            // console.log(response.data);
        }).catch(error => console.log(error));
    }, [baseCurrency, props.currency])

    return (
        <div className={classes.Convert__currencies} key={props.currency} >
            <span className={classes.currencies__header} >{props.full}</span>
            <span className={classes.currencies__value} >{props.value ? props.value : '0'} {baseCurrency ? baseCurrency : 'USD'} = {(currentRate * props.value).toFixed(3)} {props.currency}</span>
        </div>
    );
}

export default ConvertedCurrency;