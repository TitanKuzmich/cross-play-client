import React from 'react';
import classnames from "classnames";

import style from './style.module.scss';

import Divider from "../../components/Divider";
import Wrapper from "../../components/Wrapper";

import mainImg from "../../assets/png/interraction.png";

const Main = () => {
    return (
        <Wrapper id="main" extraClassName={style.mainWrapper}>
                <div className={style.contentWrapper}>
                    <div className={style.leftSide}>
                        <p className={classnames("text text--big")}>
                            Слушаете музыку ВК, но хотите перейти на Spotify?
                        </p>
                        <Divider width={"medium"} extraClassName={style.divider}/>
                        <p className={classnames("text text--big")}>
                            Не проблема!
                        </p>
                        <Divider width={"small"} extraClassName={style.divider}/>
                        <p className={classnames("text text--big")}>
                            Мы поможем Вам в пару кликов перенести плейлисты в новый сервис.
                        </p>
                    </div>
                    <div className={style.rightSide}>
                        <div className={style.imgWrapper}>
                            <img src={mainImg} alt="network"/>
                        </div>
                    </div>
                </div>
        </Wrapper>
    );
};

export default Main;