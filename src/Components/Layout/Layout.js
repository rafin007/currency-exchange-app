import React from 'react';
import Div100vh from 'react-div-100vh';
import classes from './Layout.scss';

import Sidebar from '../Sidebar/Sidebar';
import Main from '../../Containers/Main/Main';

const Layout = props => {
    return (
        <Div100vh className={classes.Layout}>
            <Sidebar />
            <Main />
        </Div100vh>
    );
}

export default Layout;