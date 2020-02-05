import React from 'react';
import classes from './Sidebar.scss';

import NavigationItems from './NavigationItems/NavigationItems';

const Sidebar = props => {
    return (
        <div className={classes.Sidebar}>
            <div className={classes.Logo}>
                <span className={classes.Logo__header}>CEA</span>
                <p className={classes.Logo__description} >Currency Exchange App</p>
            </div>
            <NavigationItems />
            <div className={classes.credits}>
                <p>Created By Arefin</p>
            </div>
        </div>
    );
}

export default Sidebar;