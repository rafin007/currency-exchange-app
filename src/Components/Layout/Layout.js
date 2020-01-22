import React from 'react';
import classes from './Layout.scss';

import Sidebar from '../Sidebar/Sidebar';
import Main from '../../Containers/Main/Main';

const Layout = props => {
    return (
        <div className={classes.Layout}>
            <Sidebar />
            <Main />
        </div>
    );
}

export default Layout;