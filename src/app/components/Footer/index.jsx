import React from "react";
import classnames from "classnames";

import Wrapper from "../Wrapper";

import style from "./style.module.scss";

const Footer = () => (
    <div className={style.footer}>
        <Wrapper>
            ©2021 - CrossPL
            <a className={classnames(style.terms, "text text--small")} href="#" target="_blank"
               rel="noopener noreferrer">
                Политика конфиденциальности
            </a>
        </Wrapper>
    </div>
)

export default Footer;