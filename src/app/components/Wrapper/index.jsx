import React from 'react';
import classnames from "classnames";

import style from "./style.module.scss";

const Wrapper = ({id, children, padding, extraClassName}) => {
    return (
        <div id={id} className={classnames(style.wrapper, extraClassName)} style={{padding: `0 ${padding}px`}}>
            {children}
        </div>
    );
};

export default Wrapper;