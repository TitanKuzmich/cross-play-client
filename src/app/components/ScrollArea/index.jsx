import React, {useEffect} from 'react';
import Scrollbar from "react-scrollbars-custom";

const ScrollArea = ({minElems = 1, numOfElems = 2, enableLibScroll = true, className, children}) => {

    return (
        <>
            {(numOfElems > minElems && enableLibScroll) ?
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