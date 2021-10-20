import React from 'react';
import classnames from 'classnames';

import style from './style.module.scss'

const Divider = ({vertical, width, extraClassName}) => {

    return (
        <div
            className={classnames(style.divider, {
                [style.vertical]: vertical,
                [style.dividerMedium]: width === "medium",
                [style.dividerSmall]: width === "small",
                [extraClassName]: extraClassName
            })}
        />
    );
};

export default Divider;