import React, { useEffect, useState } from 'react';
import classes from './FloatingButton.scss';

const FloatingButton = props => {

    const [changed, setChanged] = useState(false);

    useEffect(() => {
        const button = document.querySelector(`.${classes.FloatingButton}`);

        if (props.checked) {
            button.style.transform = 'rotate(45deg)';
            setChanged(true);
        }
        else {
            if (changed) {
                button.style.transform = 'rotate(0)';
            }
        }
    }, [props.checked, changed]);

    return (
        <div className={classes.FloatingButton} >
            {props.children}
        </div>
    );
}

export default FloatingButton;