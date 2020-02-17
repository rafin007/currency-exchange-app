import * as actionTypes from '../actions/actionTypes';

const intialState = {
    symbols: [],
    searchedRates: [],
    searchedSymbols: [],
    nations: [],
    baseCurrency: null,
    limitedRates: [],
    firstCurrency: null,
    secondCurrency: null,
    dates: [],
    convertAmount: 0
}

const reducer = (state = intialState, action) => {
    switch (action.type) {

        case actionTypes.SEARCHING:

            // console.log(Object.entries(state.symbols[0]));

            return {
                ...state,
                // searchedSymbols: action.value !== '' ? Object.entries(state.symbols[0]).filter(symbol => {
                //     if (symbol[0].toString().includes(action.value.toUpperCase()) || symbol[1].toString().toUpperCase().includes(action.value.toUpperCase())) {
                //         return symbol;
                //     }
                //     else {
                //         return null;
                //     }
                // }) : ''
                searchedSymbols: action.value !== '' ? Object.entries(state.symbols[0]).filter(symbol => {
                    if (symbol[0].toString().includes(action.value.toUpperCase()) || symbol[1].currencyName.toString().toUpperCase().includes(action.value.toUpperCase())) {
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
            // const arr = [];
            // arr.concat(action.symbols);
            // console.log(Object.entries(arr[0]));
            return {
                ...state,
                symbols: state.symbols.concat(action.symbols)
            }

        case actionTypes.SAVE_LIMITED_RATES:
            // console.log(arr);
            return {
                ...state,
                limitedRates: state.limitedRates.concat(action.rates)
            }

        case actionTypes.SAVE_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.currency
            }

        case actionTypes.SAVE_FIRST_CURRENCY:
            return {
                ...state,
                firstCurrency: action.currency
            }

        case actionTypes.SAVE_SECOND_CURRENCY:
            return {
                ...state,
                secondCurrency: action.currency
            }

        case actionTypes.GET_RANGED_DATES:
            return {
                ...state,
                dates: action.dates
            }

        case actionTypes.SAVE_CONVERT_AMOUNT:
            return {
                ...state,
                convertAmount: action.amount
            }

        default:
            return state;
    }
};

export default reducer;