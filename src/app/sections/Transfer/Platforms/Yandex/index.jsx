import React from 'react';
import classnames from "classnames";
import Lottie from "react-lottie";

import Tabs from "../../../../components/Tabs";
import Wrapper from "../../../../components/Wrapper";
import EmailInput from "../../../../components/EmailInput";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import pineappleYoga from "../../../../assets/lottie/platforms/pineappleYoga.json";
import cloud from "../../../../assets/lottie/platforms/cloud.json";
import hand from "../../../../assets/svg/hand.svg";
import password from "../../../../assets/svg/password.svg";

import style from "./style.module.scss";

const Yandex = () => {

    const pineappleYogaOptions = {
        loop: true,
        autoplay: true,
        animationData: pineappleYoga,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const vaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cloud,
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
                                   href="https://music.yandex.ru" rel="noreferrer" target="_blank">Яндекс Музыка</a> - музыкальный сервис от одноименной российского IT компании.
                            </h2>
                            <h3 className={classnames(("text text--medium"))}>
                                Персональные рекомендации, подборки на любой случай, подкасты обо всём на свете и музыкальные новинки на любой вкус для вас.
                            </h3>
                        </div>
                        <div className={classnames(style.lottieContent, style.lottieContentBig)}>
                            <Lottie options={pineappleYogaOptions}/>
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
                                            yandex
                                        >
                                            Получить токен
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
                                    1. Напрямую в Яндекс
                                </h2>
                                <p className={classnames(("text text--medium"))}>
                                    Ваш логин и пароль отправляется с Вашего компьютера сразу на сервера Яндекса без каких-либо посредников.
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
                                    Все Ваши данные отправляются по зашифрованному протоколу HTTPS на сервера Яндекс.
                                </p>
                            </div>
                        </div>
                        <div className={style.lottieContent}>
                            <Lottie options={vaultOptions}/>
                        </div>
                    </div>
                </Tabs.Tab>
            </Tabs.Container>
        </Wrapper>
    );
};

export default Yandex;