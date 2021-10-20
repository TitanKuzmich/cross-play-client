import React from "react";
import classnames from "classnames";
import {Link} from "react-router-dom";

import Wrapper from "../Wrapper";

import style from "./style.module.scss";

const Footer = () => {
    return (
        <div className={style.footer}>
            <Wrapper extraClassName={style.policyWrapper}>
                <Link className="text text--small" to="#" style={{pointerEvents: "none", cursor: "default"}}>©2021 - CrossPL</Link>
                <Link className={classnames(style.terms, "text text--small")} to="#" target="_blank"
                      rel="noopener noreferrer">
                    Политика конфиденциальности
                </Link>
            </Wrapper>
        </div>
    )
}

export default Footer;