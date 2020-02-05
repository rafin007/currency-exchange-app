import React, { useEffect } from 'react';
import classes from './Currencies.scss';

import { useSelector } from 'react-redux';

import Currency from '../../Components/Currency/Currency';

const Currencies = props => {

    const nations = useSelector(state => state.nations);
    const symbols = useSelector(state => state.symbols);

    // useEffect(() => {
    //     if (symbols.length > 0) {
    //         console.log(symbols);
    //     }
    // }, [symbols])

    return (
        <div className={classes.Currencies} >
            {/* <Currency nation="us" currency="usd" full="United States Dollar" />
            <Currency nation="gb" currency="gbp" full="Great Britain Pounds" />
            <Currency nation="ca" currency="cad" full="Canadian Dollars" />
            <Currency nation="bd" currency="bdt" full="Bangladeshi Taka" /> */}
            {nations.map(nation => {
                return <Currency nation={nation.toString().substring(0, 2)} key={nation} currency={nation} full={symbols[0][nation]} />
            })}
        </div>
    );
}

export default Currencies;