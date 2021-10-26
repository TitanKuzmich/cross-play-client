import React, {Suspense, useEffect, useState} from 'react';
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import classnames from "classnames";
import Lottie from "react-lottie";

import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import Gradient from "./app/components/Gradient";
import PageWrapper from "./app/components/PageWrapper";

import style from "./style.module.scss";

import invitationCat from "./app/assets/lottie/invitationCat.json";
import arrowsOpen from "./app/assets/lottie/arrows.json";

import {redirects, routes, setPageTitle} from "./routes/routesAndHistory";

const PAGE_TITLE_PREFIX = "CrossPL";

const App = () => {
    const [invCatOpen, setInvCatOpen] = useState(false);
    const {pathname, search} = useLocation();
    const [showGradient, setShowGradient] = useState(!pathname.match(/transfer\/(vk|inst|yandex)/));
    const [vkBg, setVkBg] = useState(!!pathname.match(/transfer\/vk/));
    const [spotifyBg, setSpotifyBg] = useState(!!pathname.match(/transfer\/spotify/));
    const [yandexBg, setYandexBg] = useState(!!pathname.match(/transfer\/yandex/));

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
        setShowGradient(!pathname.match(/transfer\/(vk|spotify|yandex)/));
        setVkBg(!!pathname.match(/transfer\/vk/));
        setSpotifyBg(!!pathname.match(/transfer\/spotify/));
        setYandexBg(!!pathname.match(/transfer\/yandex/));

        setPageTitle({prefix: PAGE_TITLE_PREFIX, routes: routes(), pathname, search});
    }, [pathname, search])

    return (
        <div className={classnames("app-wrapper", {
            ["app-wrapper--vk"]: vkBg,
            ["app-wrapper--spotify"]: spotifyBg,
            ["app-wrapper--yandex"]: yandexBg
        })}>
            {showGradient && <Gradient/>}
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
                </Switch>
            </Suspense>
            <Footer/>
            {showGradient && (
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
            )}

            { !!vkBg &&
                <div className={classnames(style.bigPlatformInscription)}>
                    <p className="text text--giant">ВКонтакте</p>
                </div>
            }

            { !!spotifyBg &&
                <div className={classnames(style.bigPlatformInscription)}>
                    <p className="text text--giant">Spotify</p>
                </div>
            }

            { !!yandexBg &&
                <div className={classnames(style.bigPlatformInscription)}>
                    <p className="text text--giant">Yandex Music</p>
                </div>
            }
        </div>
    );
}

export default App;
