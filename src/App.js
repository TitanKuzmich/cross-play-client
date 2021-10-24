import React, {Suspense, useState} from 'react';
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import classnames from "classnames";
import Lottie from "react-lottie";

import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import Gradient from "./app/components/Gradient";
import PageWrapper from "./app/components/PageWrapper";

import style from "./style.module.scss";

import invitationCat from "./app/assets/lottie/invitationCat.json";
import arrowsOpen from "./app/assets/lottie/arrows.json";

import {redirects, routes} from "./routes/routesAndHistory";

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

    return (
        <>
            <Gradient/>
            <Header/>
            <Suspense fallback={<PageWrapper/>}>
                <Switch>
                    {redirects.map(redirect => (
                        <Redirect
                            exact={redirect.exact}
                            key={redirect.from + redirect.to}
                            from={redirect.from}
                            to={redirect.to}
                            strict={redirect.strict}
                        />
                    ))}
                </Switch>
                {
                    routes().map(
                        route => (
                            <Route
                                key={Array.isArray(route.path) ? route.path.join("") : route.path}
                                path={route.path}
                                component={route.component}
                                exact={route.exact}
                            />
                        ))
                }
            </Suspense>
            <Footer/>
            <div className={style.invitationCat}>
                <div className={classnames(style.lottieWrapper, {[style.lottieWrapperOpen]: invCatOpen})}>
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
