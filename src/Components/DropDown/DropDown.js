import React from 'react';
import classes from './DropDown.scss';

import { withRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import * as actions from '../../store/actions/index';

const DropDown = props => {

    const countries = [];

    const dispatch = useDispatch();

    if (props.location.pathname === '/compare') {
        for (let key in props.symbols[0]) {
            countries.push({ nation: key, name: props.symbols[0][key] });
        }
    }
    else {
        for (let key in props.symbols[0]) {
            countries.push({ nation: key, name: props.symbols[0][key].currencyName });
        }
    }

    countries.sort((a, b) => a.nation > b.nation ? 1 : -1);


    const dropDownHandler = (event) => {
        if (props.location.pathname !== '/compare') {
            dispatch(actions.saveBaseCurrency(event.target.value));
        }
        else {
            if (props.num === '1') {
                dispatch(actions.saveFirstCurrency(event.target.value));
            }
            else {
                dispatch(actions.saveSecondCurrency(event.target.value));
            }
        }
    }

    return (
        <div className={classes.select}>
            <select name="slct" id="slct" onChange={dropDownHandler} >
                <option selected disabled>{props.ins}</option>
                {countries.map(country => <option key={country.nation} value={country.nation} >{country.nation} : {country.name}</option>)}
            </select>
        </div>
    );
}

export default withRouter(DropDown);