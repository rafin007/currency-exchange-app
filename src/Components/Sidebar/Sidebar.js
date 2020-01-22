import React from 'react';
import classes from './Sidebar.scss';

import NavigationItems from './NavigationItems/NavigationItems';

const Sidebar = props => {
    return (
        <div className={classes.Sidebar}>
            <NavigationItems />
        </div>
    );
}

export default Sidebar;