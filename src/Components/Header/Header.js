import React, { Fragment } from 'react';
import classes from './Header.scss';

import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../store/actions/index';

import sprite from '../../assets/sprite.svg';

const Header = props => {
    const dispatch = useDispatch();
    const searchedSymbols = useSelector(state => state.searchedSymbols);
    const nations = useSelector(state => state.nations)

    const onTypedHandler = (event) => {
        dispatch(actions.searching(event.target.value));

        const searcher = document.querySelector(`.${classes.Header__searchResults}`);
        searcher.style.display = 'block';
    }

    const addNation = (symbol) => {

        if (!nations.includes(symbol)) {
            dispatch(actions.addNation(symbol));
        }

        const searcher = document.querySelector(`.${classes.Header__searchResults}`);
        searcher.style.display = 'none';
    }


    return (
        <Fragment>
            <header className={classes.Header} >
                {/* <div>LOGO</div> */}
                <div className={classes.Search}>
                    <svg className={classes.Search__icon}>
                        <use xlinkHref={`${sprite}#icon-magnifying-glass`}></use>
                    </svg>
                    <input type="text" className={classes.Search__bar} placeholder="Search for currencies" onChange={onTypedHandler} />
                </div>
                {/* <div>Name</div> */}
            </header>
            <div className={classes.Header__searchResults} >
                {searchedSymbols !== '' ? searchedSymbols.map(symbol => {
                    return (
                        <div className={classes.Header__searchResults__result} key={symbol[0]} onClick={() => { addNation(symbol[0]) }} >
                            {symbol[0]} : {symbol[1]}
                        </div>
                    );
                }) : null}
            </div>
        </Fragment>
    );
}

export default Header;