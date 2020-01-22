import React from 'react';
import classes from './NavigationItems.scss';

import NavigationItem from './NavigationItem/NavigationItem';
import sprite from '../../../assets/sprite.svg';

const NavigationItems = props => {
    return (
        <nav className={classes.Blend}>
            <ul className={classes.NavigationItems} >
                <NavigationItem link="/" exact >
                    <svg className={classes.icon} >
                        <use xlinkHref={`${sprite}#icon-credit`} ></use>
                    </svg>
                    <span>
                        Rates
                    </span>
                </NavigationItem>
                <NavigationItem link="/graph" >
                    <svg className={classes.icon} >
                        <use xlinkHref={`${sprite}#icon-area-graph`} ></use>
                    </svg>
                    <span>
                        Graphs
                    </span>
                </NavigationItem>
                <NavigationItem link="/convert" >
                    <svg className={classes.icon} >
                        <use xlinkHref={`${sprite}#icon-address`} ></use>
                    </svg>
                    <span>
                        Convert
                    </span>
                </NavigationItem>
            </ul>
        </nav>
    );
}

export default NavigationItems;