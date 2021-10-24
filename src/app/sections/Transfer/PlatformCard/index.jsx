import React from 'react';
import classnames from "classnames";

import style from "./style.module.scss";

const PlatformCard = ({title, icon, link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={classnames(style.platformLink, "text")}>
            <div className={classnames(style.cardWrapper, {
                [style.cardWrapperSpotify]: title === "Spotify",
                [style.cardWrapperVk]: title === "VKontakte",
                [style.cardWrapperYandex]: title === "Yandex Music",
            })}>
                <div className={style.cardIcon}>
                    <object type="image/svg+xml" data={icon}>
                        <img src={icon} alt={title}/>
                    </object>
                </div>
                <p className={classnames(style.cardTitle, "text text--big")}>{title}</p>
            </div>
        </a>
    );
};

export default PlatformCard;