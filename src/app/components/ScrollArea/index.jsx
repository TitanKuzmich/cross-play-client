import React from 'react';
import Scrollbar from "react-scrollbars-custom";

const ScrollArea = ({minElems, numOfElems, className, children}) => {
    return (
        <>
            {numOfElems > minElems ?
                (
                    <Scrollbar
                        noScrollX
                        contentProps={{
                            renderer: props => {
                                const {elementRef, ...restProps} = props;
                                return <div {...restProps} ref={elementRef} className={className}/>;
                            }
                        }}
                    >
                        {children}
                    </Scrollbar>
                ) :
                (
                    <div className={className}>
                        {children}
                    </div>
                )
            }
        </>
    );
};

export default ScrollArea;