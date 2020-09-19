import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button className={classes.LoadMoreButton} onClick={props.clicked}>
            Load More
        </button>
    );
};

export default Button;
