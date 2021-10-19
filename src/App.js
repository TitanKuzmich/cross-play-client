import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";

import Header from "./app/components/Header";
import Gradient from "./app/components/Gradient";

const App = () => {
    const history = useHistory();

    useEffect(() => {
        history.push("#main");
    }, [history])

    return (
        <>
            <Gradient/>
            <Header/>
        </>
    );
}

export default App;
