import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import classnames from "classnames";
import Lottie from "react-lottie";

import Header from "./app/components/Header";
import Main from "./app/sections/Main";
import WhySafe from "./app/sections/WhySafe";
import Contacts from "./app/sections/Contacts";
import Transfer from "./app/sections/Transfer";
import Footer from "./app/components/Footer";
import Gradient from "./app/components/Gradient";

import style from "./style.module.scss";

import invitationCat from "./app/assets/lottie/invitationCat.json";
import arrowsOpen from "./app/assets/lottie/arrows.json";

const App = () => {
    const history = useHistory();
    const [invCatOpen, setInvCatOpen] = useState(false);
    const invitationCatOptions = {
        loop: true,
        autoplay: true,
        animationData: invitationCat,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const arrowsOpenOptions = {
        loop: true,
        autoplay: true,
        animationData: arrowsOpen,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        history.push("#main");
    }, [history])

    return (
        <>
            <Gradient/>
            <Header/>
            {/*<Main/>*/}
            {/*<WhySafe/>*/}
            {/*<Contacts/>*/}
            {/*<Transfer/>*/}
            <Footer/>
            <div className={classnames(style.invitationCat, {[style.invitationCatOpen]: invCatOpen})}>
                <div className={style.lottieWrapper}>
                    <Lottie options={invitationCatOptions}/>

                    <div
                        className={classnames(style.arrowsOpen, {[style.arrowsClose]: invCatOpen})}
                        onClick={() => setInvCatOpen(!invCatOpen)}
                    >
                        <Lottie options={arrowsOpenOptions}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
