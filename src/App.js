import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";

import Header from "./app/components/Header";
import Main from "./app/sections/Main";
import Footer from "./app/components/Footer";

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
            <Main/>
            <Footer/>
        </>
    );
}

export default App;
