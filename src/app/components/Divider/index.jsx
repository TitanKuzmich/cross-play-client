import React from 'react';
import classnames from 'classnames';

import style from './style.module.scss'

const Divider = ({vertical, width, margin}) => {

    return (
        <div
            className={classnames(style.divider, {
                [style.vertical]: vertical,
                [style.dividerMedium]: width === "medium",
                [style.dividerSmall]: width === "small"
            })}
            style={{margin: `${margin}px 0`}}
        />
    );
};

export default Divider;