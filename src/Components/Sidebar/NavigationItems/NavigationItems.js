import React from 'react';
import classes from './NavigationItems.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    return (
        <nav className={classes.Blend}>
            <ul className={classes.NavigationItems} >
                <NavigationItem link="/" exact >Rates</NavigationItem>
                <NavigationItem link="/graph" >Graph</NavigationItem>
                <NavigationItem link="/convert" >Convert</NavigationItem>
            </ul>
        </nav>
    );
}

export default NavigationItems;