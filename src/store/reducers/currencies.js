import * as actionTypes from '../actions/actionTypes';

const intialState = {
    rates: [],
    symbols: [],
    loading: false,
    error: null,
    searchedRates: [],
    searchedSymbols: [],
    nations: [],
    baseCurrency: null
}

const reducer = (state = intialState, action) => {
    switch (action.type) {

        case actionTypes.SEARCHING:

            // console.log(state.rates[0]);

            return {
                ...state,
                loading: false,
                searchedSymbols: action.value !== '' ? Object.entries(state.symbols[0]).filter(symbol => {
                    if (symbol[0].toString().includes(action.value.toUpperCase()) || symbol[1].toString().toUpperCase().includes(action.value.toUpperCase())) {
                        return symbol;
                    }
                    else {
                        return null;
                    }
                }) : ''
            }

        case actionTypes.ADD_NATION:

            return {
                ...state,
                nations: state.nations.concat(action.nation)
            }

        case actionTypes.DELETE_NATION:
            return {
                ...state,
                nations: state.nations.filter(nation => nation !== action.nation)
            }

        case actionTypes.SAVE_RATES:
            return {
                ...state,
                error: null,
                rates: state.rates.concat(action.rates),
                symbols: state.symbols.concat(action.symbols)
            }

        case actionTypes.SAVE_RATES_FAILED:
            return {
                ...state,
                error: action.error
            }

        case actionTypes.SAVE_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.currency
            }

        default:
            return state;
    }
};

export default reducer;