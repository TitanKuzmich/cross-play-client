import React from 'react';
import classnames from "classnames";
import Lottie from "react-lottie";

import Tabs from "../../../../components/Tabs";
import Wrapper from "../../../../components/Wrapper";
import Button from "../../../../components/Button";

import avocadoGuitar from "../../../../assets/lottie/platforms/avocadoGuitar.json";
import safe from "../../../../assets/lottie/platforms/safe.json";

import style from "./style.module.scss";

const Spotify = () => {

    const avocadoGuitarOptions = {
        loop: true,
        autoplay: true,
        animationData: avocadoGuitar,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const safeOptions = {
        loop: true,
        autoplay: true,
        animationData: safe,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Wrapper extraClassName={style.mainWrapper}>
            <Tabs.Container className={style.tabWrapper} dividerClassName={style.dividerClassName}
                            tabNameClassActive={style.activeTab}>
                <Tabs.Tab
                    title="О платформе"
                    onSelect={() => {
                    }}
                >
                    <div className={style.noticeTab}>
                        <div className={classnames(style.textContent)}>
                            <h2 className={classnames(style.textContentTitle, "text text--big")}>
                                <a className={classnames(style.linkToPlatform, "text text--big")}
                                   href="https://www.spotify.com" rel="noreferrer" target="_blank">Spotify</a> -
                                музыкальный сервис №1 в мире.
                            </h2>
                            <h3 className={classnames(style.textContentDescription,"text text--medium")}>
                                Охватывает около трети мирового стримингового рынка. Имеет наиболее крутую на
                                нынешний день рекомендательную систему, а также вполне удобный интерфейс.
                            </h3>
                            <Button spotify>
                                Перейти в Spotify
                            </Button>
                        </div>
                        <div className={classnames(style.lottieContent, style.lottieContentBig)}>
                            <Lottie options={avocadoGuitarOptions}/>
                        </div>
                    </div>
                </Tabs.Tab>

                <Tabs.Tab
                    title="Еще о безопасности"
                    onSelect={() => {
                    }}
                >
                    <div className={style.noticeTab}>
                        <div className={classnames(style.textContent)}>
                            <div className={style.textContentWrapper}>
                                <h2 className={classnames(style.textContentTitle, style.textContentTitleList, "text text--big")}>
                                    1. Авторизация через Spotify
                                </h2>
                                <p className={classnames(("text text--medium"))}>
                                    Авторизация происходит через сервис Spotify, который отправляет нам только токен,
                                    необходимый для работы.
                                </p>
                            </div>
                            <div className={style.textContentWrapper}>
                                <h2 className={classnames(style.textContentTitle, style.textContentTitleList, "text text--big")}>
                                    2. Только официальное приложение
                                </h2>
                                <p className={classnames(("text text--medium"))}>
                                    Авторизация происходит через сервис Spotify, который отправляет нам только токен,
                                    необходимый для работы.
                                </p>
                            </div>
                            <div className={style.textContentWrapper}>
                                <h2 className={classnames(style.textContentTitle, style.textContentTitleList, "text text--big")}>
                                    3. Выполнение в браузере
                                </h2>
                                <p className={classnames(("text text--medium"))}>
                                    Весь код выполняется в Вашем браузере без возможности вмешательства с чьей-либо
                                    стороны.
                                </p>
                            </div>
                        </div>
                        <div className={classnames(style.lottieContent, style.lottieContentSmall)}>
                            <Lottie options={safeOptions}/>
                        </div>
                    </div>
                </Tabs.Tab>
            </Tabs.Container>
        </Wrapper>
    );
};

export default Spotify;