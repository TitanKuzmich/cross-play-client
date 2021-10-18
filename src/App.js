import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";

import Header from "./app/components/Header";

const App = () => {
    const history = useHistory();

    useEffect(() => {
        history.push("#main");
    }, [])

    return (
        <>
            <Header/>
        </>
    );
}

export default App;
