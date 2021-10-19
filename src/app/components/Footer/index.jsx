import React, {useEffect, useRef, useState} from "react";
import classnames from "classnames";
import Lottie from "react-lottie";
import {Link} from "react-router-dom";

import Wrapper from "../Wrapper";

import style from "./style.module.scss";

import invitationCat from "../../assets/lottie/invitationCat.json"
import arrowsOpen from "../../assets/lottie/arrows.json"

const Footer = () => {
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
        <div className={style.footer}>
            <Wrapper padding={73}>
                <Link className="text text--small" to="#">©2021 - CrossPL</Link>
                <Link className={classnames(style.terms, "text text--small")} to="#" target="_blank"
                      rel="noopener noreferrer">
                    Политика конфиденциальности
                </Link>
            </Wrapper>

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
        </div>
    )
}

export default Footer;