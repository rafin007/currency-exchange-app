import * as actionTypes from './actionTypes';
import { axiosLatestLimited, axiosSymbols } from '../../axios-requests';

import axios from 'axios';
import { act } from 'react-dom/test-utils';

export const searching = (value) => {
    return {
        type: actionTypes.SEARCHING,
        value
    };
};

const saveRates = (symbols) => {
    return {
        type: actionTypes.SAVE_RATES,
        symbols
    };
};

const saveLimitedRates = (rates) => {
    return {
        type: actionTypes.SAVE_LIMITED_RATES,
        rates
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
            const symbols = (await axiosSymbols.get()).data.symbols;

            dispatch(saveRates(symbols));
        }
        catch (error) {
            dispatch(saveRatesFailed(error));
        }
    };
};

export const retrieveLimitedRates = () => {
    return async dispatch => {
        try {
            const limitedRates = (await axiosLatestLimited.get()).data.rates;

            dispatch(saveLimitedRates(limitedRates));
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
    };
};

export const saveFirstCurrency = (currency) => {
    return {
        type: actionTypes.SAVE_FIRST_CURRENCY,
        currency
    };
};

export const saveSecondCurrency = (currency) => {
    return {
        type: actionTypes.SAVE_SECOND_CURRENCY,
        currency
    };
};

const getRangedDates = (dates) => {
    return {
        type: actionTypes.GET_RANGED_DATES,
        dates
    };
};

export const retrieveRangedDates = (startDate, endDate) => {
    return async (dispatch, getState) => {
        try {
            const response = (await axios.get(`https://api.exchangeratesapi.io/history?base=${getState().firstCurrency}&start_at=${startDate}&end_at=${endDate}&symbols=${getState().firstCurrency},${getState().secondCurrency}`)).data.rates;
            const dateArr = [];
            for (let key in response) {
                dateArr.push({ id: key, values: response[key] });
            }
            dateArr.sort((a, b) => new Date(a.id) - new Date(b.id));
            dispatch(getRangedDates(dateArr));
        }
        catch (error) {
            console.log(error);
        }
    };
};


//---------------------- NEW API -----------------------------

const API_KEY = 'cadab762875dc10f460a';