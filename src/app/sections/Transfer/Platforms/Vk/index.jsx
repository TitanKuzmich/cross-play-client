import React, {useEffect} from 'react';
import classnames from "classnames";
import Lottie from "react-lottie";

import Tabs from "../../../../components/Tabs";
import Wrapper from "../../../../components/Wrapper";
import EmailInput from "../../../../components/EmailInput";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Textarea from "../../../../components/Textarea";

import penguine from "../../../../assets/lottie/platforms/penguin.json";
import locked from "../../../../assets/lottie/platforms/locked.json";
import hand from "../../../../assets/svg/hand.svg";
import password from "../../../../assets/svg/password.svg";

import style from "./style.module.scss";

const Vk = () => {

    const penguineOptions = {
        loop: true,
        autoplay: true,
        animationData: penguine,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const lockedOptions = {
        loop: true,
        autoplay: true,
        animationData: locked,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Wrapper extraClassName={style.mainWrapper}>
            <Tabs.Container className={style.tabWrapper} dividerClassName={style.dividerClassName} tabNameClassActive={style.activeTab}>
                <Tabs.Tab
                    title="О платформе"
                    onSelect={() => {
                    }}
                >
                    <div className={style.noticeTab}>
                        <div className={classnames(style.textContent)}>
                            <h2 className={classnames(style.textContentTitle, "text text--big")}>
                                <a className={classnames(style.linkToPlatform, "text text--big")}
                                   href="https://vk.com/audio" rel="noreferrer" target="_blank">Музыка ВКонтакте</a> или
                                же специальный сервис от ВКонтаке <a
                                className={classnames(style.linkToPlatform, "text text--big")}
                                href="https://vk.com/audio" rel="noreferrer" target="_blank">"Boom"</a> - онлайн сервис
                                с
                                огромной библиотекой альбомов и треков.
                            </h2>
                            <h3 className={classnames(("text text--medium"))}>
                                Платформа построена на основе социальной сети и берет свои корни из пиратского прошлого,
                                что придает ей огромное разнообразие треков.
                            </h3>
                        </div>
                        <div className={classnames(style.lottieContent, style.lottieContentBig)}>
                            <Lottie options={penguineOptions}/>
                        </div>
                    </div>
                </Tabs.Tab>

                <Tabs.Tab
                    title="Авторизация"
                    onSelect={() => {
                    }}
                >
                    <div className={style.noticeTab}>
                        <div className={classnames(style.textContent, style.textContentAuth)}>
                            <div className={style.textContentWrapper}>
                                <h2 className={classnames(style.textContentTitle, style.textContentTitleCentered, "text text--middle")}>
                                    Для переноса необходимо авторизироваться.
                                    <br/>!!! Обязательно посмотрите инструкцию прежде, чем начать !!!
                                </h2>
                            </div>
                            <div className={style.formWrapper}>
                                <form
                                    className={style.authForm}
                                    // onSubmit={onSubmit}
                                >
                                    <EmailInput
                                        className={style.input}
                                        placeholder="Логин"
                                        icon={hand}
                                        // email={formData.email}
                                        // setError={setError}
                                        // isError={!!error}
                                        // setEmail={email => setFormData({ ...formData, email })}
                                    />

                                    <Input
                                        className={style.input}
                                        icon={password}
                                        type="password" placeholder="Пароль"
                                        // alue={formData.password} onChange={onChangePassword}
                                    />
                                    {/*<div className={style.errorMessage}>{error}</div>*/}

                                    <div className={style.actions}>
                                        <Button
                                            // loading={isLoading}
                                            vk
                                        >
                                            Получить токен
                                        </Button>
                                    </div>
                                </form>

                                <form
                                    className={style.tokenForm}
                                    // onSubmit={onSubmit}
                                >
                                    <Textarea
                                        className={style.input}
                                        placeholder="Вставьте сюда JSON код"
                                    />

                                    <div className={style.actions}>
                                        <Button
                                            // loading={isLoading}
                                            vk
                                        >
                                            Продолжить
                                        </Button>
                                    </div>
                                </form>
                                <div className={style.videoWrapper}/>
                            </div>
                        </div>
                    </div>
                </Tabs.Tab>

                <Tabs.Tab
                    title="Еще о безопасности"
                    onSelect={() => {}}
                >
                    <div className={style.noticeTab}>
                        <div className={classnames(style.textContent)}>
                            <div className={style.textContentWrapper}>
                                <h2 className={classnames(style.textContentTitle, style.textContentTitleList, "text text--big")}>
                                    1. Напрямую в Вконтакте
                                </h2>
                                <p className={classnames(("text text--medium"))}>
                                    Ваши логин и пароль отправляются с компьютера сразу на сервера Вконтакте без
                                    каких-либо посредников.
                                </p>
                            </div>
                            <div className={style.textContentWrapper}>
                                <h2 className={classnames(style.textContentTitle, style.textContentTitleList, "text text--big")}>
                                    2. Не храним Ваши пароли
                                </h2>
                                <p className={classnames(("text text--medium"))}>
                                    На наших серверах хранится только Ваш уникальный токен, полученный при авторизации, а не логин и пароль.
                                </p>
                            </div>
                            <div className={style.textContentWrapper}>
                                <h2 className={classnames(style.textContentTitle, style.textContentTitleList, "text text--big")}>
                                    3. Используем безопасное соединение
                                </h2>
                                <p className={classnames(("text text--medium"))}>
                                    Все Ваши данные отправляются по зашифрованному протоколу HTTPS на сервера Вконтакте.
                                </p>
                            </div>
                        </div>
                        <div className={style.lottieContent}>
                            <Lottie options={lockedOptions}/>
                        </div>
                    </div>
                </Tabs.Tab>
            </Tabs.Container>
        </Wrapper>
    );
};

export default Vk;