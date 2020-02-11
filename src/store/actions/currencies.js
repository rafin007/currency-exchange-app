import * as actionTypes from './actionTypes';
import { axiosLatest, axiosSymbols, axiosGetRateByBaseCurrency } from '../../axios-requests';

import axios from 'axios';

export const searching = (value) => {
    return {
        type: actionTypes.SEARCHING,
        value
    };
};

const saveRates = (rates, symbols) => {
    return {
        type: actionTypes.SAVE_RATES,
        rates,
        symbols
    };
};

const saveRatesFailed = (error) => {
    return {
        type: actionTypes.SAVE_RATES_FAILED,
        error
    };
};

export const addNation = (nation) => {
    return {
        type: actionTypes.ADD_NATION,
        nation
    };
};

export const deleteNation = (nation) => {
    return {
        type: actionTypes.DELETE_NATION,
        nation
    };
};

export const retrieveRates = () => {
    return async dispatch => {
        try {
            const rates = (await axiosLatest.get()).data.rates;
            const symbols = (await axiosSymbols.get()).data.symbols;

            dispatch(saveRates(rates, symbols));
        }
        catch (error) {
            dispatch(saveRatesFailed(error));
        }
    };
};

export const saveBaseCurrency = (currency) => {
    return {
        type: actionTypes.SAVE_BASE_CURRENCY,
        currency
    }
}


//---------------------- NEW API -----------------------------

const API_KEY = 'cadab762875dc10f460a';