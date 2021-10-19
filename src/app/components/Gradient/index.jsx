import React, {useCallback, useEffect, useState} from 'react';
import classnames from "classnames";

import {gradients} from "./gradients";
import style from "./style.module.scss";

const Gradient = ({disable}) => {
    const gradientRefs = [];

    const [lastPos, setLastPos] = useState(0);

    const onMouseMove = useCallback((event) => {
        if (Math.abs(lastPos - event.pageX) > 350) {
            setLastPos(event.pageX);

            gradientRefs.map((gradient) => {
                gradient.style.opacity = 0;
                return gradient;
            })

            gradientRefs[Math.floor(Math.random() * 4)].style.opacity = 1;
        }
    }, [lastPos])

    useEffect(() => {
        gradientRefs[0].style.opacity = 1;
    }, [])

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove)

        return () => window.removeEventListener("mousemove", onMouseMove)
    }, [onMouseMove])

    return (
        <>
            {gradients.map((gradient, i) => {
                return <div ref={ref => ref && gradientRefs.push(ref)} key={`${gradient}_${i}`} className={classnames(style.gradient, gradient)}/>
            })}
        </>
    );
};

export default Gradient;