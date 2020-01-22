import React from 'react';
import classes from './Sidebar.scss';

import NavigationItems from './NavigationItems/NavigationItems';

const Sidebar = props => {
    return (
        <div className={classes.Sidebar}>
            <NavigationItems />
            <div className={classes.credits}>
                <p>Created By Arefin</p>
            </div>
        </div>
    );
}

export default Sidebar;